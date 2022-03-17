<?php
// rsce_my_element_config.php
return array(
    'label' => array('Sponsor Galerie', 'Meine Beschreibung...'),
    'types' => array('content', 'module'),
    'contentCategory' => 'texts',
    'moduleCategory' => 'miscellaneous',
    'beTemplate' => 'be_wildcard',
    'standardFields' => array('headline', 'cssID'),
    'wrapper' => array(
        'type' => 'none',
    ),
    'fields' => array(
        'images' => array(
            'label' => array('Sterne', 'Alle Bilder von Sponsorensternen...'),
            'eval' => array(
                'multiple' => true,
                'files' => true
            ),
            'inputType' => 'fileTree',
        ),
    ),
);