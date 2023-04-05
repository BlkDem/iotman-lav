<template>
  <div class="home-container">
    <div shadow="always" style="margin-bottom:30px;">
      <div class="emq-title">
        Configuration
      </div>
      <form ref="configForm" hide-required-asterisk size="" labposition="top" :model="connection">
        <div :gutter="20">
          <div :span="8">
            <div prop="host" label="Host">
              <input v-model="connection.host">
            </div>
          </div>
          <div :span="8">
            <div prop="port" label="Port">
              <input v-model.number="connection.port" type="number" placeholder="8083/8084">
            </div>
          </div>
          <div :span="8">
            <div prop="endpoint" label="Mountpoint">
              <input v-model="connection.endpoint" placeholder="/mqtt">
            </div>
          </div>
          <div :span="8">
            <div prop="clientId" label="Client ID">
              <input v-model="connection.clientId">
            </div>
          </div>
          <div :span="8">
            <div prop="username" label="Username">
              <input v-model="connection.username">
            </div>
          </div>
          <div :span="8">
            <div prop="password" label="Password">
              <input v-model="connection.password">
            </div>
          </div>

          <div :span="24">
            <button
              type="success"
              size=""
              class="conn-btn"
              style="margin-right: 20px;"
              :disabled="client.connected"
              @click.prevent="createConnection"
            >
              {{ client.connected ? 'Connected' : 'Connect' }}
            </button>

            <button v-if="client.connected" type="danger" size="" class="conn-btn" @click="destroyConnection">
              Disconnect
            </button>
          </div>
        </div>
      </form>
    </div>
    <div shadow="always" style="margin-bottom:30px;">
      <div class="emq-title">
        Subscribe
      </div>
      <form ref="subscription" hide-required-asterisk size="" labposition="top" :model="subscription">
        <div :gutter="20">
          <div :span="8">
            <div prop="topic" label="Topic">
              <input v-model="subscription.topic">
            </div>
          </div>
          <div :span="8">
            <div prop="qos" label="QoS">
              <select v-model="subscription.qos">
                <option
                  v-for="(item, index) in qosList"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                ></option>
              </select>
            </div>
          </div>
          <div :span="8">
            <button
              :disabled="!client.connected"
              type="success"
              size=""
              class="subscribe-btn"
              @click.prevent="doSubscribe"
            >
              {{ subscribeSuccess ? 'Subscribed' : 'Subscribe' }}
            </button>
            <button
              :disabled="!client.connected"
              type="success"
              size=""
              class="subscribe-btn"
              style="margin-left:20px"
              @click.prevent="doUnSubscribe"
              v-if="subscribeSuccess"
            >
              Unsubscribe
            </button>
          </div>
        </div>
      </form>
    </div>
    <div shadow="always" style="margin-bottom:30px;">
      <div class="emq-title">
        Publish
      </div>
      <form ref="publish" hide-required-asterisk size="" labposition="top" :model="publish">
        <div :gutter="20">
          <div :span="8">
            <div prop="topic" label="Topic">
              <input v-model="publish.topic">
            </div>
          </div>
          <div :span="8">
            <div prop="payload" label="Payload">
              <input v-model="publish.payload" size="">
            </div>
          </div>
          <div :span="8">
            <div prop="qos" label="QoS">
              <select v-model="publish.qos">
                <option
                  v-for="(item, index) in qosList"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                ></option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <div :span="24">
        <button :disabled="!client.connected" type="success" size="" class="publish-btn" @click="doPublish">
          Publish
        </button>
      </div>
    </div>
    <div shadow="always" style="margin-bottom:30px;">
      <div class="emq-title">
        Receive
      </div>
      <div :span="24">
        <input type="textarea" :divs="3" style="margin-bottom: 15px" v-model="receiveNews">
      </div>
    </div>
  </div>
</template>

<script>
import mqtt from '../vendor/mqtt.min.js';
import MakeID from '../helpers/MakeID';
import { makeRe } from 'minimatch';

export default {
  name: 'MQTT',

  data() {
    return {

      connection: {
        host: 'ice9.umolab.ru',
        port: 8000,
        endpoint: '/',
        clean: true,
        connectTimeout: 4000,
        reconnectPeriod: 4000,
        // hwid: '18:FE:34:FE:B6:90',
        clientId: '',
        username: 'umolab',
        password: '',
      },

      subscription: {
        topic: `/18:FE:34:FE:B6:90/#`,
        qos: 0,
      },

      publish: {
        topic: 'topic/bdivser',
        qos: 0,
        payload: '{ "msg": "Hello, I am bdivser." }',
        retain: true
      },

      receiveNews: '',

      qosList: [
        { label: 0, value: 0 },
        { label: 1, value: 1 },
        { label: 2, value: 2 },
      ],

      client: {
        connected: false,
      },

      subscribeSuccess: false,
    }
  },

  created() {

    this.connection.clientId =  MakeID.makeId(8, 'mqtt_umolab_')

  },

  mounted() {
    // console.log(this.client)
    this.createConnection()
  },

  beforeUnmount() {

    console.log(this.client.connected)
    this.doUnSubscribe()
    this.destroyConnection()
    console.log(this.client.connected)
  },

  methods: {



    createConnection() {

        // Connect string, and specify the connection method used through protodiv
      // ws unencrypted WebSocket connection
      // wss encrypted WebSocket connection
      // mqtt unencrypted TCP connection
      // mqtts encrypted TCP connection
      // wxs WeChat mini app connection
      // alis Alipay mini app connection

        // console.log(process.env)

      const { host, port, endpoint, ...options } = this.connection
      const connectUrl = 'ws://ice9.umolab.ru:8000'

      try {
        console.log(options)
        this.client = mqtt.connect(connectUrl, options)
      } catch (error) {
        console.log('mqtt.connect error', error)
      }
      this.client.on('connect', () => {
        console.log('Connection succeeded!')
        this.doSubscribe('/18:FE:34:FE:B6:90/zone1')
        this.doSubscribe('/18:FE:34:FE:B6:90/zone2')
        this.doSubscribe('/18:FE:34:FE:B6:90/zone3')
        this.doSubscribe('/18:FE:34:FE:B6:90/zone4')

        this.doSubscribe('/18:FE:34:FE:B6:90/count1')
        this.doSubscribe('/18:FE:34:FE:B6:90/count2')
        this.doSubscribe('/18:FE:34:FE:B6:90/count3')
        this.doSubscribe('/18:FE:34:FE:B6:90/count4')
      })
      this.client.on('error', error => {
        console.log('Connection failed', error)
      })
      this.client.on('message', (topic, message) => {
        this.receiveNews = this.receiveNews.concat(message)
        console.log(`Received message ${message} from topic ${topic}`)
      })
    },

    // subscribtions
    doSubscribe(topic) {
    //   const { topic, qos } = this.subscription
      const qos = 0

      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log('Subscribe to topics error', error)
          return
        }
        this.subscribeSuccess = true
        console.log('Subscribe to topics res', res)
      })
    },
    // unsubsribtions
    doUnSubscribe() {
      const { topic } = this.subscription
      this.client.unsubscribe(topic, error => {
        if (error) {
          console.log('Unsubscribe error', error)
        }
      })
    },

    // publish
    doPublish() {
      const { topic, qos, payload, retain } = this.publish
      this.client.publish(topic, payload, {'qos': qos, 'retain': retain}, error => {
        if (error) {
          console.log('Publish error', error)
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
          console.log('Successfully disconnected!')
        } catch (error) {
          console.log('Disconnect failed', error.toString())
        }
      }
    },
  },
}
</script>

<!-- <style lang="scss">
@import '../../sass/mqtt.scss';

.home-container {
  max-width: 1100px;
  margin: 0 auto;

  .conn-btn {
    divor: #fff;
    background-divor: #00b173;
    font-size: 14px;
  }

  .publish-btn {
    margin-bottom: 20px;
    float: right;
  }

  .button--success {
    background-divor: #34c388 !important;
    border-divor: #34c388 !important;
    font-size: 14px !important;
  }

  .button--danger {
    background-divor: #f5222d !important;
    border-divor: #f5222d !important;
  }

  .div {
    &.is-error {
      .input__inner,
      .textarea__inner {
        box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
      }
    }
    &.is-success {
      .input__inner,
      .textarea__inner {
        border-divor: #34c388 !important;
      }
    }
  }
}
</style> -->
