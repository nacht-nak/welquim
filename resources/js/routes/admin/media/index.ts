import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\MediaController::upload
 * @see app/Http/Controllers/Admin/MediaController.php:11
 * @route '/admin/media/upload'
 */
export const upload = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '/admin/media/upload/index',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MediaController::upload
 * @see app/Http/Controllers/Admin/MediaController.php:11
 * @route '/admin/media/upload'
 */
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MediaController::upload
 * @see app/Http/Controllers/Admin/MediaController.php:11
 * @route '/admin/media/upload'
 */
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\MediaController::upload
* @see app/Http/Controllers/Admin/MediaController.php:11
* @route '/admin/media/upload'
*/
const uploadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\MediaController::upload
* @see app/Http/Controllers/Admin/MediaController.php:11
* @route '/admin/media/upload'
*/
uploadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

upload.form = uploadForm
const media = {
    upload: Object.assign(upload, upload),
}

export default media