# PHP

## Start the server: 
    symfony serve

## Routes and controller: 
    php bin/console make:controller
    php bin/console debug:router

## Entity: 
    php bin/console make:entity

## Migration: 
    php bin/console make:migration
    php bin/console doctrine:migrations:migrate -n

## Load data: 
    php bin/console make:fixtures
    php bin/console doctrine:fixtures:load

## Database: 
    php bin/console doctrine:database:create
    php bin/console doctrine:database:drop --force 

## Form: 
    php bin/console make:form

## API: 
    composer require api 

## Templating:

### Twig:
Doc: https://twig.symfony.com/doc/3.x/ 

## Checks:

### Syntax check: 
php-cs-fixer à télécharger et à mettre à la racine du projet  
pour vérifier les erreurs présentes dans le dossier src:
    
    php php-cs-fixer.phar fix src --dry-run --diff

pour corriger tous les problèmes qu'il trouve:

    php php-cs-fixer.phar fix src  

check the yaml files from the confi and translations folders:

    php bin/console lint:yaml config translations

check the twig files:

    php bin/console lint:twig templates

### Logic check on php files: 
To install PHPStan

    composer require --dev phpstan/extension-installer  
    composer require --dev phpstan/phpstan-symfony

Or in the composer.jason: 

    "require-dev": { 
        "phpstan/extension-installer": "^1.0", 
        "phpstan/phpstan": "^0.12.23", 
        "phpstan/phpstan-doctrine": "^0.12.12", 
        "phpstan/phpstan-symfony": "^0.12.33", 
    }, 

In the command line: 

    composer update 

Then create a file phpstan.neon at the project root

    parameters: 
        excludes_analyse: '%currentWorkingDirectory%/src/Kernel.php' 
        level: 1 
        paths: src 

Finally launch the command 

    php vendor/phpstan/phpstan/phpstan.phar analyse 


## Docker: 

    docker-compose up 

{{ dump() }} 