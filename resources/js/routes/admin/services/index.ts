import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ServiceController::index
 * @see app/Http/Controllers/Admin/ServiceController.php:14
 * @route '/admin/services'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get", "head"],
    url: '/admin/services/index',
} satisfies RouteDefinition<["get", "head"]>

/**
* @see \App\Http\Controllers\Admin\ServiceController::index
 * @see app/Http/Controllers/Admin/ServiceController.php:14
 * @route '/admin/services'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceController::index
 * @see app/Http/Controllers/Admin/ServiceController.php:14
 * @route '/admin/services'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ServiceController::index
 * @see app/Http/Controllers/Admin/ServiceController.php:14
 * @route '/admin/services'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ServiceController::index
* @see app/Http/Controllers/Admin/ServiceController.php:14
* @route '/admin/services'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ServiceController::index
* @see app/Http/Controllers/Admin/ServiceController.php:14
* @route '/admin/services'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ServiceController::index
* @see app/Http/Controllers/Admin/ServiceController.php:14
* @route '/admin/services'
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
* @see \App\Http\Controllers\Admin\ServiceController::create
 * @see app/Http/Controllers/Admin/ServiceController.php:21
 * @route '/admin/services/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get", "head"],
    url: '/admin/services/create',
} satisfies RouteDefinition<["get", "head"]>

/**
* @see \App\Http\Controllers\Admin\ServiceController::create
 * @see app/Http/Controllers/Admin/ServiceController.php:21
 * @route '/admin/services/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceController::create
 * @see app/Http/Controllers/Admin/ServiceController.php:21
 * @route '/admin/services/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ServiceController::create
 * @see app/Http/Controllers/Admin/ServiceController.php:21
 * @route '/admin/services/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ServiceController::create
* @see app/Http/Controllers/Admin/ServiceController.php:21
* @route '/admin/services/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ServiceController::create
* @see app/Http/Controllers/Admin/ServiceController.php:21
* @route '/admin/services/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ServiceController::create
* @see app/Http/Controllers/Admin/ServiceController.php:21
* @route '/admin/services/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm
/**
* @see \App\Http\Controllers\Admin\ServiceController::store
 * @see app/Http/Controllers/Admin/ServiceController.php:26
 * @route '/admin/services'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/services',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ServiceController::store
 * @see app/Http/Controllers/Admin/ServiceController.php:26
 * @route '/admin/services'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceController::store
 * @see app/Http/Controllers/Admin/ServiceController.php:26
 * @route '/admin/services'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ServiceController::store
* @see app/Http/Controllers/Admin/ServiceController.php:26
* @route '/admin/services'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ServiceController::store
* @see app/Http/Controllers/Admin/ServiceController.php:26
* @route '/admin/services'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\ServiceController::show
 * @see app/Http/Controllers/Admin/ServiceController.php:0
 * @route '/admin/services/{service}'
 */
export const show = (args: { service: string | number } | [service: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get", "head"],
    url: '/admin/services/{service}',
} satisfies RouteDefinition<["get", "head"]>

/**
* @see \App\Http\Controllers\Admin\ServiceController::show
 * @see app/Http/Controllers/Admin/ServiceController.php:0
 * @route '/admin/services/{service}'
 */
show.url = (args: { service: string | number } | [service: string | number] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service: args }
    }


    if (Array.isArray(args)) {
        args = {
            service: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        service: args.service,
    }

    return show.definition.url
        .replace('{service}', parsedArgs.service.toString())
        .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceController::show
 * @see app/Http/Controllers/Admin/ServiceController.php:0
 * @route '/admin/services/{service}'
 */
show.get = (args: { service: string | number } | [service: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ServiceController::show
 * @see app/Http/Controllers/Admin/ServiceController.php:0
 * @route '/admin/services/{service}'
 */
show.head = (args: { service: string | number } | [service: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ServiceController::show
* @see app/Http/Controllers/Admin/ServiceController.php:0
* @route '/admin/services/{service}'
*/
const showForm = (args: { service: string | number } | [service: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ServiceController::show
* @see app/Http/Controllers/Admin/ServiceController.php:0
* @route '/admin/services/{service}'
*/
showForm.get = (args: { service: string | number } | [service: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ServiceController::show
* @see app/Http/Controllers/Admin/ServiceController.php:0
* @route '/admin/services/{service}'
*/
showForm.head = (args: { service: string | number } | [service: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\ServiceController::edit
 * @see app/Http/Controllers/Admin/ServiceController.php:42
 * @route '/admin/services/{service}/edit'
 */
export const edit = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get", "head"],
    url: '/admin/services/{service}/edit',
} satisfies RouteDefinition<["get", "head"]>

/**
* @see \App\Http\Controllers\Admin\ServiceController::edit
 * @see app/Http/Controllers/Admin/ServiceController.php:42
 * @route '/admin/services/{service}/edit'
 */
edit.url = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { service: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            service: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        service: typeof args.service === 'object'
            ? args.service.id
            : args.service,
    }

    return edit.definition.url
        .replace('{service}', parsedArgs.service.toString())
        .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceController::edit
 * @see app/Http/Controllers/Admin/ServiceController.php:42
 * @route '/admin/services/{service}/edit'
 */
edit.get = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ServiceController::edit
 * @see app/Http/Controllers/Admin/ServiceController.php:42
 * @route '/admin/services/{service}/edit'
 */
edit.head = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ServiceController::edit
* @see app/Http/Controllers/Admin/ServiceController.php:42
* @route '/admin/services/{service}/edit'
*/
const editForm = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ServiceController::edit
* @see app/Http/Controllers/Admin/ServiceController.php:42
* @route '/admin/services/{service}/edit'
*/
editForm.get = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ServiceController::edit
* @see app/Http/Controllers/Admin/ServiceController.php:42
* @route '/admin/services/{service}/edit'
*/
editForm.head = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm
/**
* @see \App\Http\Controllers\Admin\ServiceController::update
 * @see app/Http/Controllers/Admin/ServiceController.php:49
 * @route '/admin/services/{service}'
 */
export const update = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put", "patch"],
    url: '/admin/services/{service}',
} satisfies RouteDefinition<["put", "patch"]>

/**
* @see \App\Http\Controllers\Admin\ServiceController::update
 * @see app/Http/Controllers/Admin/ServiceController.php:49
 * @route '/admin/services/{service}'
 */
update.url = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { service: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            service: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        service: typeof args.service === 'object'
            ? args.service.id
            : args.service,
    }

    return update.definition.url
        .replace('{service}', parsedArgs.service.toString())
        .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceController::update
 * @see app/Http/Controllers/Admin/ServiceController.php:49
 * @route '/admin/services/{service}'
 */
update.put = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\ServiceController::update
 * @see app/Http/Controllers/Admin/ServiceController.php:49
 * @route '/admin/services/{service}'
 */
update.patch = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\ServiceController::update
* @see app/Http/Controllers/Admin/ServiceController.php:49
* @route '/admin/services/{service}'
*/
const updateForm = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ServiceController::update
* @see app/Http/Controllers/Admin/ServiceController.php:49
* @route '/admin/services/{service}'
*/
updateForm.put = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})
/**
* @see \App\Http\Controllers\Admin\ServiceController::update
* @see app/Http/Controllers/Admin/ServiceController.php:49
* @route '/admin/services/{service}'
*/
updateForm.patch = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\ServiceController::destroy
 * @see app/Http/Controllers/Admin/ServiceController.php:65
 * @route '/admin/services/{service}'
 */
export const destroy = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/services/{service}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ServiceController::destroy
 * @see app/Http/Controllers/Admin/ServiceController.php:65
 * @route '/admin/services/{service}'
 */
destroy.url = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { service: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            service: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        service: typeof args.service === 'object'
            ? args.service.id
            : args.service,
    }

    return destroy.definition.url
        .replace('{service}', parsedArgs.service.toString())
        .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceController::destroy
 * @see app/Http/Controllers/Admin/ServiceController.php:65
 * @route '/admin/services/{service}'
 */
destroy.delete = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\ServiceController::destroy
* @see app/Http/Controllers/Admin/ServiceController.php:65
* @route '/admin/services/{service}'
*/
const destroyForm = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ServiceController::destroy
* @see app/Http/Controllers/Admin/ServiceController.php:65
* @route '/admin/services/{service}'
*/
destroyForm.delete = (args: { service: number | { id: number } } | [service: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm
const services = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default services