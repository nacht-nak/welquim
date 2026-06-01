import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\SkillController::index
 * @see app/Http/Controllers/Admin/SkillController.php:14
 * @route '/admin/skills'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get", "head"],
    url: '/admin/skills/index',
} satisfies RouteDefinition<["get", "head"]>

/**
* @see \App\Http\Controllers\Admin\SkillController::index
 * @see app/Http/Controllers/Admin/SkillController.php:14
 * @route '/admin/skills'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SkillController::index
 * @see app/Http/Controllers/Admin/SkillController.php:14
 * @route '/admin/skills'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SkillController::index
 * @see app/Http/Controllers/Admin/SkillController.php:14
 * @route '/admin/skills'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::index
* @see app/Http/Controllers/Admin/SkillController.php:14
* @route '/admin/skills'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::index
* @see app/Http/Controllers/Admin/SkillController.php:14
* @route '/admin/skills'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SkillController::index
* @see app/Http/Controllers/Admin/SkillController.php:14
* @route '/admin/skills'
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
* @see \App\Http\Controllers\Admin\SkillController::create
 * @see app/Http/Controllers/Admin/SkillController.php:21
 * @route '/admin/skills/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get", "head"],
    url: '/admin/skills/create',
} satisfies RouteDefinition<["get", "head"]>

/**
* @see \App\Http\Controllers\Admin\SkillController::create
 * @see app/Http/Controllers/Admin/SkillController.php:21
 * @route '/admin/skills/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SkillController::create
 * @see app/Http/Controllers/Admin/SkillController.php:21
 * @route '/admin/skills/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SkillController::create
 * @see app/Http/Controllers/Admin/SkillController.php:21
 * @route '/admin/skills/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::create
* @see app/Http/Controllers/Admin/SkillController.php:21
* @route '/admin/skills/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::create
* @see app/Http/Controllers/Admin/SkillController.php:21
* @route '/admin/skills/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SkillController::create
* @see app/Http/Controllers/Admin/SkillController.php:21
* @route '/admin/skills/create'
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
* @see \App\Http\Controllers\Admin\SkillController::store
 * @see app/Http/Controllers/Admin/SkillController.php:26
 * @route '/admin/skills'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/skills',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\SkillController::store
 * @see app/Http/Controllers/Admin/SkillController.php:26
 * @route '/admin/skills'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SkillController::store
 * @see app/Http/Controllers/Admin/SkillController.php:26
 * @route '/admin/skills'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::store
* @see app/Http/Controllers/Admin/SkillController.php:26
* @route '/admin/skills'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::store
* @see app/Http/Controllers/Admin/SkillController.php:26
* @route '/admin/skills'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\SkillController::show
 * @see app/Http/Controllers/Admin/SkillController.php:0
 * @route '/admin/skills/{skill}'
 */
export const show = (args: { skill: string | number } | [skill: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get", "head"],
    url: '/admin/skills/{skill}',
} satisfies RouteDefinition<["get", "head"]>

/**
* @see \App\Http\Controllers\Admin\SkillController::show
 * @see app/Http/Controllers/Admin/SkillController.php:0
 * @route '/admin/skills/{skill}'
 */
show.url = (args: { skill: string | number } | [skill: string | number] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { skill: args }
    }


    if (Array.isArray(args)) {
        args = {
            skill: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        skill: args.skill,
    }

    return show.definition.url
        .replace('{skill}', parsedArgs.skill.toString())
        .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SkillController::show
 * @see app/Http/Controllers/Admin/SkillController.php:0
 * @route '/admin/skills/{skill}'
 */
show.get = (args: { skill: string | number } | [skill: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SkillController::show
 * @see app/Http/Controllers/Admin/SkillController.php:0
 * @route '/admin/skills/{skill}'
 */
show.head = (args: { skill: string | number } | [skill: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::show
* @see app/Http/Controllers/Admin/SkillController.php:0
* @route '/admin/skills/{skill}'
*/
const showForm = (args: { skill: string | number } | [skill: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::show
* @see app/Http/Controllers/Admin/SkillController.php:0
* @route '/admin/skills/{skill}'
*/
showForm.get = (args: { skill: string | number } | [skill: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SkillController::show
* @see app/Http/Controllers/Admin/SkillController.php:0
* @route '/admin/skills/{skill}'
*/
showForm.head = (args: { skill: string | number } | [skill: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\SkillController::edit
 * @see app/Http/Controllers/Admin/SkillController.php:42
 * @route '/admin/skills/{skill}/edit'
 */
export const edit = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get", "head"],
    url: '/admin/skills/{skill}/edit',
} satisfies RouteDefinition<["get", "head"]>

/**
* @see \App\Http\Controllers\Admin\SkillController::edit
 * @see app/Http/Controllers/Admin/SkillController.php:42
 * @route '/admin/skills/{skill}/edit'
 */
edit.url = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { skill: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { skill: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            skill: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        skill: typeof args.skill === 'object'
            ? args.skill.id
            : args.skill,
    }

    return edit.definition.url
        .replace('{skill}', parsedArgs.skill.toString())
        .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SkillController::edit
 * @see app/Http/Controllers/Admin/SkillController.php:42
 * @route '/admin/skills/{skill}/edit'
 */
edit.get = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SkillController::edit
 * @see app/Http/Controllers/Admin/SkillController.php:42
 * @route '/admin/skills/{skill}/edit'
 */
edit.head = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::edit
* @see app/Http/Controllers/Admin/SkillController.php:42
* @route '/admin/skills/{skill}/edit'
*/
const editForm = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::edit
* @see app/Http/Controllers/Admin/SkillController.php:42
* @route '/admin/skills/{skill}/edit'
*/
editForm.get = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SkillController::edit
* @see app/Http/Controllers/Admin/SkillController.php:42
* @route '/admin/skills/{skill}/edit'
*/
editForm.head = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\SkillController::update
 * @see app/Http/Controllers/Admin/SkillController.php:49
 * @route '/admin/skills/{skill}'
 */
export const update = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put", "patch"],
    url: '/admin/skills/{skill}',
} satisfies RouteDefinition<["put", "patch"]>

/**
* @see \App\Http\Controllers\Admin\SkillController::update
 * @see app/Http/Controllers/Admin/SkillController.php:49
 * @route '/admin/skills/{skill}'
 */
update.url = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { skill: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { skill: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            skill: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        skill: typeof args.skill === 'object'
            ? args.skill.id
            : args.skill,
    }

    return update.definition.url
        .replace('{skill}', parsedArgs.skill.toString())
        .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SkillController::update
 * @see app/Http/Controllers/Admin/SkillController.php:49
 * @route '/admin/skills/{skill}'
 */
update.put = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\SkillController::update
 * @see app/Http/Controllers/Admin/SkillController.php:49
 * @route '/admin/skills/{skill}'
 */
update.patch = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::update
* @see app/Http/Controllers/Admin/SkillController.php:49
* @route '/admin/skills/{skill}'
*/
const updateForm = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::update
* @see app/Http/Controllers/Admin/SkillController.php:49
* @route '/admin/skills/{skill}'
*/
updateForm.put = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})
/**
* @see \App\Http\Controllers\Admin\SkillController::update
* @see app/Http/Controllers/Admin/SkillController.php:49
* @route '/admin/skills/{skill}'
*/
updateForm.patch = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\SkillController::destroy
 * @see app/Http/Controllers/Admin/SkillController.php:65
 * @route '/admin/skills/{skill}'
 */
export const destroy = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/skills/{skill}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\SkillController::destroy
 * @see app/Http/Controllers/Admin/SkillController.php:65
 * @route '/admin/skills/{skill}'
 */
destroy.url = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { skill: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { skill: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            skill: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        skill: typeof args.skill === 'object'
            ? args.skill.id
            : args.skill,
    }

    return destroy.definition.url
        .replace('{skill}', parsedArgs.skill.toString())
        .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SkillController::destroy
 * @see app/Http/Controllers/Admin/SkillController.php:65
 * @route '/admin/skills/{skill}'
 */
destroy.delete = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::destroy
* @see app/Http/Controllers/Admin/SkillController.php:65
* @route '/admin/skills/{skill}'
*/
const destroyForm = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::destroy
* @see app/Http/Controllers/Admin/SkillController.php:65
* @route '/admin/skills/{skill}'
*/
destroyForm.delete = (args: { skill: number | { id: number } } | [skill: number | { id: number }] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm
const skills = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default skills