<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run()
    {
        // Reset cached roles and permissions
        app()['cache']->forget('spatie.permission.cache');

        // Collections Permissions
        Permission::create(['name' => 'create collections']);
        Permission::create(['name' => 'read draft collections']);
        Permission::create(['name' => 'update collections']);
        Permission::create(['name' => 'delete collections']);

        // Collection Type Permissions
        Permission::create(['name' => 'create collection types']);
        Permission::create(['name' => 'read draft collection types']);
        Permission::create(['name' => 'update collection types']);
        Permission::create(['name' => 'delete collection types']);

        // Product Permissions
        Permission::create(['name' => 'create products']);
        Permission::create(['name' => 'read draft products']);
        Permission::create(['name' => 'update products']);
        Permission::create(['name' => 'delete products']);

        // User Permissions
        Permission::create(['name' => 'create users']);
        Permission::create(['name' => 'read users']);
        Permission::create(['name' => 'update users']);
        Permission::create(['name' => 'delete users']);

        // Role Permissions
        Permission::create(['name' => 'create roles']);
        Permission::create(['name' => 'read roles']);
        Permission::create(['name' => 'update roles']);
        Permission::create(['name' => 'delete roles']);
        Permission::create(['name' => 'assign roles']);

        // Permission Permissions
        Permission::create(['name' => 'assign permissions']);

        // API Tokens
        Permission::create(['name' => 'create api-tokens']);
        Permission::create(['name' => 'read api-tokens']);
        Permission::create(['name' => 'update api-tokens']);
        Permission::create(['name' => 'delete api-tokens']);

        // Logs
        Permission::create(['name' => 'read logs']);

        Permission::create(['name' => 'create galleries']);
        Permission::create(['name' => 'read draft galleries']);
        Permission::create(['name' => 'update galleries']);
        Permission::create(['name' => 'delete galleries']);

        Permission::create(['name' => 'create media']);
        Permission::create(['name' => 'read draft media']);
        Permission::create(['name' => 'update media']);
        Permission::create(['name' => 'delete media']);

        Permission::create(['name' => 'create pages']);
        Permission::create(['name' => 'read draft pages']);
        Permission::create(['name' => 'update pages']);
        Permission::create(['name' => 'delete pages']);

        Permission::create(['name' => 'create menus']);
        Permission::create(['name' => 'read menus']);
        Permission::create(['name' => 'update menus']);
        Permission::create(['name' => 'delete menus']);

        // Developer
        $role = Role::create(['name' => 'developer', 'level' => 7]);
        // API Tokens
        $role->givePermissionTo('create api-tokens');
        $role->givePermissionTo('read api-tokens');
        $role->givePermissionTo('delete api-tokens');
        // Users
        $role->givePermissionTo('read users');

        // Admin
        $role = Role::create(['name' => 'admin', 'level' => 10]);
        // Collections
        $role->givePermissionTo('create collections');
        $role->givePermissionTo('read draft collections');
        $role->givePermissionTo('update collections');
        $role->givePermissionTo('delete collections');
        // Collection Types
        $role->givePermissionTo('create collection types');
        $role->givePermissionTo('read draft collection types');
        $role->givePermissionTo('update collection types');
        $role->givePermissionTo('delete collection types');
        // Products
        $role->givePermissionTo('create products');
        $role->givePermissionTo('read draft products');
        $role->givePermissionTo('update products');
        $role->givePermissionTo('delete products');
        // Users
        $role->givePermissionTo('create users');
        $role->givePermissionTo('read users');
        $role->givePermissionTo('update users');
        $role->givePermissionTo('delete users');
        // Roles
        $role->givePermissionTo('create roles');
        $role->givePermissionTo('read roles');
        $role->givePermissionTo('update roles');
        $role->givePermissionTo('delete roles');
        // Permissions
        $role->givePermissionTo('assign permissions');
        // Logs
        $role->givePermissionTo('read logs');
        // Galleries
        $role->givePermissionTo('create galleries');
        $role->givePermissionTo('read draft galleries');
        $role->givePermissionTo('update galleries');
        $role->givePermissionTo('delete galleries');
        // Media
        $role->givePermissionTo('create media');
        $role->givePermissionTo('read draft media');
        $role->givePermissionTo('update media');
        $role->givePermissionTo('delete media');
        // Pages
        $role->givePermissionTo('create pages');
        $role->givePermissionTo('read draft pages');
        $role->givePermissionTo('update pages');
        $role->givePermissionTo('delete pages');
        // Menus
        $role->givePermissionTo('create menus');
        $role->givePermissionTo('read menus');
        $role->givePermissionTo('update menus');
        $role->givePermissionTo('delete menus');

        // Writer
        $role = Role::create(['name' => 'writer', 'level' => 8]);
        // Collections
        $role->givePermissionTo('create collections');
        $role->givePermissionTo('read draft collections');
        $role->givePermissionTo('update collections');
        // Collection Types
        $role->givePermissionTo('create collection types');
        $role->givePermissionTo('read draft collection types');
        $role->givePermissionTo('update collection types');
        // Products
        $role->givePermissionTo('create products');
        $role->givePermissionTo('read draft products');
        $role->givePermissionTo('update products');
        // Users
        $role->givePermissionTo('read users');
        $role->givePermissionTo('update users');
        // Galleries
        $role->givePermissionTo('create galleries');
        $role->givePermissionTo('read draft galleries');
        $role->givePermissionTo('update galleries');
        // Media
        $role->givePermissionTo('create media');
        $role->givePermissionTo('read draft media');
        $role->givePermissionTo('update media');
        // Pages
        $role->givePermissionTo('create pages');
        $role->givePermissionTo('read draft pages');
        $role->givePermissionTo('update pages');
        // Menus
        $role->givePermissionTo('create menus');
        $role->givePermissionTo('read menus');
        $role->givePermissionTo('update menus');

        // User
        $role = Role::create(['name' => 'customer', 'level' => 1]);
    }
}
