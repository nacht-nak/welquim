import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\MessageController::index
 * @see app/Http/Controllers/Admin/MessageController.php:14
 * @route '/admin/messages'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get", "head"],
    url: '/admin/messages/index',
} satisfies RouteDefinition<["get", "head"]>

/**
* @see \App\Http\Controllers\Admin\MessageController::index
 * @see app/Http/Controllers/Admin/MessageController.php:14
 * @route '/admin/messages'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MessageController::index
 * @see app/Http/Controllers/Admin/MessageController.php:14
 * @route '/admin/messages'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\MessageController::index
 * @see app/Http/Controllers/Admin/MessageController.php:14
 * @route '/admin/messages'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\MessageController::index
* @see app/Http/Controllers/Admin/MessageController.php:14
* @route '/admin/messages'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\MessageController::index
* @see app/Http/Controllers/Admin/MessageController.php:14
* @route '/admin/messages'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\MessageController::index
* @see app/Http/Controllers/Admin/MessageController.php:14
* @route '/admin/messages'
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
* @see \App\Http\Controllers\Admin\MessageController::show
 * @see app/Http/Controllers/Admin/MessageController.php:42
 * @route '/admin/messages/{message}'
 */
export const show = (args: { message: number | { id: number } } | [message: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get", "head"],
    url: '/admin/messages/{message}',
} satisfies RouteDefinition<["get", "head"]>

/**
* @see \App\Http\Controllers\Admin\MessageController::show
 * @see app/Http/Controllers/Admin/MessageController.php:42
 * @route '/admin/messages/{message}'
 */
show.url = (args: { message: number | { id: number } } | [message: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { message: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { message: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            message: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        message: typeof args.message === 'object'
            ? args.message.id
            : args.message,
    }

    return show.definition.url
        .replace('{message}', parsedArgs.message.toString())
        .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MessageController::show
 * @see app/Http/Controllers/Admin/MessageController.php:42
 * @route '/admin/messages/{message}'
 */
show.get = (args: { message: number | { id: number } } | [message: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\MessageController::show
 * @see app/Http/Controllers/Admin/MessageController.php:42
 * @route '/admin/messages/{message}'
 */
show.head = (args: { message: number | { id: number } } | [message: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\MessageController::show
* @see app/Http/Controllers/Admin/MessageController.php:42
* @route '/admin/messages/{message}'
*/
const showForm = (args: { message: number | { id: number } } | [message: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\MessageController::show
* @see app/Http/Controllers/Admin/MessageController.php:42
* @route '/admin/messages/{message}'
*/
showForm.get = (args: { message: number | { id: number } } | [message: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\MessageController::show
* @see app/Http/Controllers/Admin/MessageController.php:42
* @route '/admin/messages/{message}'
*/
showForm.head = (args: { message: number | { id: number } } | [message: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm
/**
* @see \App\Http\Controllers\Admin\MessageController::read
 * @see app/Http/Controllers/Admin/MessageController.php:51
 * @route '/admin/messages/{message}/read'
 */
export const read = (args: { message: number | { id: number } } | [message: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: read.url(args, options),
    method: 'patch',
})

read.definition = {
    methods: ["patch"],
    url: '/admin/messages/{message}/read',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Admin\MessageController::read
 * @see app/Http/Controllers/Admin/MessageController.php:51
 * @route '/admin/messages/{message}/read'
 */
read.url = (args: { message: number | { id: number } } | [message: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { message: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { message: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            message: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        message: typeof args.message === 'object'
            ? args.message.id
            : args.message,
    }

    return read.definition.url
        .replace('{message}', parsedArgs.message.toString())
        .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MessageController::read
 * @see app/Http/Controllers/Admin/MessageController.php:51
 * @route '/admin/messages/{message}/read'
 */
read.patch = (args: { message: number | { id: number } } | [message: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: read.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\MessageController::read
* @see app/Http/Controllers/Admin/MessageController.php:51
* @route '/admin/messages/{message}/read'
*/
const readForm = (args: { message: number | { id: number } } | [message: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: read.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\MessageController::read
* @see app/Http/Controllers/Admin/MessageController.php:51
* @route '/admin/messages/{message}/read'
*/
readForm.patch = (args: { message: number | { id: number } } | [message: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: read.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

read.form = readForm
/**
* @see \App\Http\Controllers\Admin\MessageController::destroy
 * @see app/Http/Controllers/Admin/MessageController.php:58
 * @route '/admin/messages/{message}'
 */
export const destroy = (args: { message: number | { id: number } } | [message: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/messages/{message}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\MessageController::destroy
 * @see app/Http/Controllers/Admin/MessageController.php:58
 * @route '/admin/messages/{message}'
 */
destroy.url = (args: { message: number | { id: number } } | [message: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { message: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { message: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            message: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        message: typeof args.message === 'object'
            ? args.message.id
            : args.message,
    }

    return destroy.definition.url
        .replace('{message}', parsedArgs.message.toString())
        .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MessageController::destroy
 * @see app/Http/Controllers/Admin/MessageController.php:58
 * @route '/admin/messages/{message}'
 */
destroy.delete = (args: { message: number | { id: number } } | [message: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\MessageController::destroy
* @see app/Http/Controllers/Admin/MessageController.php:58
* @route '/admin/messages/{message}'
*/
const destroyForm = (args: { message: number | { id: number } } | [message: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\MessageController::destroy
* @see app/Http/Controllers/Admin/MessageController.php:58
* @route '/admin/messages/{message}'
*/
destroyForm.delete = (args: { message: number | { id: number } } | [message: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm
const messages = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    read: Object.assign(read, read),
    destroy: Object.assign(destroy, destroy),
}

export default messages