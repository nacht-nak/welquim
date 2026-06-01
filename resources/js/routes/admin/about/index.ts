import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\AboutController::index
 * @see app/Http/Controllers/Admin/AboutController.php:15
 * @route '/admin/about'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get", "head"],
    url: '/admin/about/index',
} satisfies RouteDefinition<["get", "head"]>

/**
* @see \App\Http\Controllers\Admin\AboutController::index
 * @see app/Http/Controllers/Admin/AboutController.php:15
 * @route '/admin/about'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AboutController::index
 * @see app/Http/Controllers/Admin/AboutController.php:15
 * @route '/admin/about'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AboutController::index
 * @see app/Http/Controllers/Admin/AboutController.php:15
 * @route '/admin/about'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\AboutController::index
* @see app/Http/Controllers/Admin/AboutController.php:15
* @route '/admin/about'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\AboutController::index
* @see app/Http/Controllers/Admin/AboutController.php:15
* @route '/admin/about'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AboutController::index
* @see app/Http/Controllers/Admin/AboutController.php:15
* @route '/admin/about'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm
/**
* @see \App\Http\Controllers\Admin\AboutController::update
 * @see app/Http/Controllers/Admin/AboutController.php:22
 * @route '/admin/about'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/about',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\AboutController::update
 * @see app/Http/Controllers/Admin/AboutController.php:22
 * @route '/admin/about'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AboutController::update
 * @see app/Http/Controllers/Admin/AboutController.php:22
 * @route '/admin/about'
 */
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\AboutController::update
* @see app/Http/Controllers/Admin/AboutController.php:22
* @route '/admin/about'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\AboutController::update
* @see app/Http/Controllers/Admin/AboutController.php:22
* @route '/admin/about'
*/
updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm
const about = {
    index: Object.assign(index, index),
    update: Object.assign(update, update),
}

export default about