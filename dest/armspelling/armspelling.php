<?php
/**
 * Plugin Name: ArmSpelling
 * Plugin URI: http://wordpress.org/extend/plugins/ArmSpelling/
 * Description: This is armenian spelling plugin.
 * Author: Armen, Osip, omegascorp <omegascorp@gmail.com>
 * Version: 1.0
 * Author URI: http://instigatedesign.am
 */

add_action('wp_enqueue_scripts', 'wpputs_scripts');

function wpputs_scripts() {
    // register the script
    wp_register_script('mashtots', plugins_url('armspelling.min.js', __FILE__), array('jquery'), '2.0');
    //wp_register_script('mashtots_wp_armspelling', plugins_url('wp-armspelling.js', __FILE__), array('jquery'), '2.0');

    // register the styles of the plugin
    wp_register_style('armspelling-style', plugins_url('css/armspelling.css', __FILE__), array(), '2.0', 'all');

    // wp_enqueue_script('wp-armspelling');
    wp_enqueue_script('mashtots');
    wp_enqueue_script('mashtots_wp_armspelling');
    wp_enqueue_style('armspelling-style');
}
?>
