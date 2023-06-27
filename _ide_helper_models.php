<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Album
 *
 * @property int $id
 * @property string $album_name
 * @property string|null $album_desc
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Image> $images
 * @property-read int|null $images_count
 * @method static \Illuminate\Database\Eloquent\Builder|Album newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Album newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Album query()
 * @method static \Illuminate\Database\Eloquent\Builder|Album whereAlbumDesc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Album whereAlbumName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Album whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Album whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Album whereUpdatedAt($value)
 */
	class Album extends \Eloquent {}
}

namespace App\Models\Auth{
/**
 * App\Models\Auth\Permission
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Auth\Role> $roles
 * @property-read int|null $roles_count
 * @method static \Illuminate\Database\Eloquent\Builder|Permission newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Permission newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Permission query()
 * @method static \Illuminate\Database\Eloquent\Builder|Permission whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Permission whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Permission whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Permission whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Permission whereUpdatedAt($value)
 */
	class Permission extends \Eloquent {}
}

namespace App\Models\Auth{
/**
 * App\Models\Auth\Role
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Auth\Permission> $permissions
 * @property-read int|null $permissions_count
 * @method static \Illuminate\Database\Eloquent\Builder|Role newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Role newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Role query()
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereUpdatedAt($value)
 */
	class Role extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\DevBlog
 *
 * @property int $id
 * @property string $dev_blog_name
 * @property string|null $dev_blog_desc
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|DevBlog newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DevBlog newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DevBlog query()
 * @method static \Illuminate\Database\Eloquent\Builder|DevBlog whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DevBlog whereDevBlogDesc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DevBlog whereDevBlogName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DevBlog whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DevBlog whereUpdatedAt($value)
 */
	class DevBlog extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Device
 *
 * @property int $id
 * @property string $device_name
 * @property string|null $device_desc
 * @property string|null $device_hwid
 * @property string|null $device_pass
 * @property int $device_type_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\DeviceType $DeviceType
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\DeviceType[] $DeviceTypes
 * @property-read int|null $device_types_count
 * @method static \Database\Factories\DeviceFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Device newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Device newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Device query()
 * @method static \Illuminate\Database\Eloquent\Builder|Device whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Device whereDeviceDesc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Device whereDeviceHwid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Device whereDeviceName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Device whereDevicePass($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Device whereDeviceTypeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Device whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Device whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	class Device extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\DeviceMicro
 *
 * @property int $id
 * @property int $device_id
 * @property int $micro_id
 * @property string $device_micro_idx
 * @property string|null $device_micro_desc
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Device $device
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\MicroParam> $microParams
 * @property-read int|null $micro_params_count
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceMicro newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceMicro newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceMicro query()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceMicro whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceMicro whereDeviceId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceMicro whereDeviceMicroDesc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceMicro whereDeviceMicroIdx($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceMicro whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceMicro whereMicroId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceMicro whereUpdatedAt($value)
 */
	class DeviceMicro extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\DeviceType
 *
 * @property int $id
 * @property string $device_type_name
 * @property string $device_type_desc
 * @property string $device_type_image
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\DeviceTypeFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType query()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType whereDeviceTypeDesc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType whereDeviceTypeImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType whereDeviceTypeName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType whereUpdatedAt($value)
 * @mixin \Eloquent
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType supertod()
 */
	class DeviceType extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\DeviceUser
 *
 * @property int $id
 * @property string $user_device_name
 * @property string|null $user_device_pass
 * @property int $device_id
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser query()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser whereDeviceId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser whereUserDeviceName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser whereUserDevicePass($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser whereUserId($value)
 * @mixin \Eloquent
 */
	class DeviceUser extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\DeviceUsersView
 *
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUsersView newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUsersView newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUsersView query()
 * @mixin \Eloquent
 */
	class DeviceUsersView extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\DevicesView
 *
 * @method static \Illuminate\Database\Eloquent\Builder|DevicesView newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DevicesView newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DevicesView query()
 * @mixin \Eloquent
 */
	class DevicesView extends \Eloquent {}
}

namespace App\Models\Helpers{
/**
 * App\Models\Helpers\Preset
 *
 * @property int $id
 * @property string $preset_key
 * @property string|null $preset_value
 * @property string|null $preset_description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Preset newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Preset newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Preset query()
 * @method static \Illuminate\Database\Eloquent\Builder|Preset whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Preset whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Preset wherePresetDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Preset wherePresetKey($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Preset wherePresetValue($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Preset whereUpdatedAt($value)
 */
	class Preset extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Image
 *
 * @property int $id
 * @property string $image_name
 * @property string|null $image_desc
 * @property int $album_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Album $album
 * @method static \Illuminate\Database\Eloquent\Builder|Image newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Image newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Image query()
 * @method static \Illuminate\Database\Eloquent\Builder|Image whereAlbumId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Image whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Image whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Image whereImageDesc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Image whereImageName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Image whereUpdatedAt($value)
 */
	class Image extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\ImagesAlbum
 *
 * @method static \Illuminate\Database\Eloquent\Builder|ImagesAlbum newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ImagesAlbum newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ImagesAlbum query()
 */
	class ImagesAlbum extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Logger
 *
 * @property int $id
 * @property int $log_level
 * @property string|null $log_category
 * @property string|null $log_instance
 * @property string $log_data
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $log_object
 * @method static \Illuminate\Database\Eloquent\Builder|Logger newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Logger newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Logger query()
 * @method static \Illuminate\Database\Eloquent\Builder|Logger whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Logger whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Logger whereLogCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Logger whereLogData($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Logger whereLogInstance($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Logger whereLogLevel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Logger whereLogObject($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Logger whereUpdatedAt($value)
 */
	class Logger extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Micro
 *
 * @property int $id
 * @property string $micro_name
 * @property string|null $micro_desc
 * @property string|null $micro_config
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Micro newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Micro newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Micro query()
 * @method static \Illuminate\Database\Eloquent\Builder|Micro whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Micro whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Micro whereMicroConfig($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Micro whereMicroDesc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Micro whereMicroName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Micro whereUpdatedAt($value)
 */
	class Micro extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\MicroParam
 *
 * @property int $id
 * @property string $param_name
 * @property string|null $param_value
 * @property string|null $param_min
 * @property string|null $param_max
 * @property string|null $param_suff
 * @property int|null $param_in
 * @property int $device_micro_id
 * @property int $param_type_id
 * @property string|null $param_desc
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|MicroParam newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MicroParam newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MicroParam query()
 * @method static \Illuminate\Database\Eloquent\Builder|MicroParam whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MicroParam whereDeviceMicroId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MicroParam whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MicroParam whereParamDesc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MicroParam whereParamIn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MicroParam whereParamMax($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MicroParam whereParamMin($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MicroParam whereParamName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MicroParam whereParamSuff($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MicroParam whereParamTypeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MicroParam whereParamValue($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MicroParam whereUpdatedAt($value)
 */
	class MicroParam extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\ParamType
 *
 * @property int $id
 * @property string $type_name
 * @property string|null $type_desc
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ParamType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ParamType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ParamType query()
 * @method static \Illuminate\Database\Eloquent\Builder|ParamType whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ParamType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ParamType whereTypeDesc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ParamType whereTypeName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ParamType whereUpdatedAt($value)
 */
	class ParamType extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Auth\Permission> $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Auth\Role> $roles
 * @property-read int|null $roles_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\UserRole> $user_roles
 * @property-read int|null $user_roles_count
 */
	class User extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\UserDevicesCount
 *
 * @method static \Illuminate\Database\Eloquent\Builder|UserDevicesCount newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserDevicesCount newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserDevicesCount query()
 */
	class UserDevicesCount extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\UserRole
 *
 * @property int $user_id
 * @property int $role_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $id
 * @property-read \App\Models\Auth\Role|null $role
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\User> $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder|UserRole newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserRole newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserRole query()
 * @method static \Illuminate\Database\Eloquent\Builder|UserRole whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserRole whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserRole whereRoleId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserRole whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserRole whereUserId($value)
 */
	class UserRole extends \Eloquent {}
}

