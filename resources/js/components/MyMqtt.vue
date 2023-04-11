<template>

</template>

<script>
import mqtt from '../vendor/mqtt.min.js';
import MakeID from '../helpers/MakeID';
import APIConstants from '../api/rest_api';
import ParsingErrors from '../helpers/ParsingErrors';

export default {

    name: 'MQTT',

    emits: ['onConnect', 'onMessage', 'onError' ],

    props: {
        paramItems: {
            type: Array,
        }
    },

    data() {
        return {

            // mqtt_server: '',
            // mqtt_protocol: '',
            // mqtt_port: '',

            connection: {
                host: 'ice9.umolab.ru',
                port: 8000,
                endpoint: '/',
                clean: true,

                connectTimeout: 4000,
                reconnectPeriod: 4000,
                protocol: '',
                clientId: '',
                username: 'umolab',
                password: '',
            },

            subscription: {
                topic: '',
                qos: 0,
            },

            publish: {
                topic: '',
                qos: 0,
                payload: '',
                retain: true
            },

            client: {
                connected: false,
            },

            subscribeSuccess: false,
        }
    },

    created() {

        this.connection.clientId = MakeID.makeId(8, 'mqtt_umolab_')

    },

    mounted() {
        this.getMQTTParams()
    },

    beforeUnmount() {

        this.destroyConnection()
        console.log(this.client.connected)
    },

    methods: {

        async getMQTTParams() {
            try {

                await axios.get(APIConstants.api_presets_group + 'MQTT')
                    .then(response => {
                        const configMQTT = response.data.data

                        for (let item in configMQTT) {
                            if (configMQTT[item].preset_key === 'MQTT_SERVER') this.connection.host = configMQTT[item].preset_value
                            if (configMQTT[item].preset_key === 'MQTT_PROTOCOL') this.connection.protocol = configMQTT[item].preset_value
                            if (configMQTT[item].preset_key === 'MQTT_PORT') this.connection.port = configMQTT[item].preset_value
                        }
                        this.createConnection()
                    })
            } catch (error) {
                console.log(error);

                if (error.response.status === 401) {
                    window.location.href = "/login"
                }

                this.$root.$refs.toaster.showMessage(
                    MessagesConstants.DELETING_ERROR,
                    ParsingErrors.getError(error),
                    ParsingErrors.ERROR_LEVEL_ERROR
                )
            }
        },

        processParams() {
            for (let item in this.paramItems) {
                if(this.paramItems[item]['param_in'] <= 0) {
                    this.doSubscribe(this.paramItems[item]['param_fullname'])
                }
            }
        },

        createConnection() {

            // Connect string, and specify the connection method used through protodiv
            // ws unencrypted WebSocket connection
            // wss encrypted WebSocket connection
            // mqtt unencrypted TCP connection
            // mqtts encrypted TCP connection
            // wxs WeChat mini app connection
            // alis Alipay mini app connection

            const {
                host,
                port,
                endpoint,
                ...options
            } = this.connection

            const connectUrl = this.connection.protocol + '://' + this.connection.host + ':' + this.connection.port
                // 'wss://ice9.umolab.ru:9883'

            try {
                console.log(options)
                this.client = mqtt.connect(connectUrl, options)
            } catch (error) {
                console.log('MQTT: connect error', error)
            }

            this.client.on('connect', () => {
                console.log('MQTT: Connection succeeded!')
                this.$emit('onConnect', true)
                this.processParams()
            })

            this.client.on('error', error => {
                console.log('MQTT: Connection failed', error)
                this.$emit('onError', error)
            })

            this.client.on('message', (topic, message) => {
                this.$emit('onMessage', topic, message.toString())
            })
        },

        // subscribtions
        doSubscribe(topic) {
            //   const { topic, qos } = this.subscription
            const qos = 0

            this.client.subscribe(topic, {
                qos
            }, (error, res) => {
                if (error) {
                    console.log('MQTT: Subscribe to topics error', error)
                    return
                }
                this.subscribeSuccess = true
                // console.log('MQTT: Subscribe to topics res', res)
            })
        },
        // unsubsribtions
        doUnSubscribe() {
            const {
                topic
            } = this.subscription
            this.client.unsubscribe(topic, error => {
                if (error) {
                    console.log('MQTT: Unsubscribe error', error)
                }
            })
        },

        // publish
        doPublish(topic, payload) {
            const {
                // topic,
                qos,
                // payload,
                retain
            } = this.publish
            this.client.publish(topic, payload, {
                'qos': qos,
                'retain': retain
            }, error => {
                if (error) {
                    console.log('MQTT: Publish error', error)
                }
            })
        },

        // disconnect
        destroyConnection() {
            if (this.client.connected) {
                try {
                    this.client.end()
                    this.client = {
                        connected: false,
                    }
                    console.log('MQTT: Successfully disconnected!')
                } catch (error) {
                    console.log('MQTT: Disconnect failed', error.toString())
                }
            }
        },
    },
}
</script>

