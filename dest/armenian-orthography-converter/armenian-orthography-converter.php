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
    wp_register_script('aoc', plugins_url('armenian-orthography-converter.min.js', __FILE__), array('jquery'), '2.0');

    // register the styles of the plugin
    wp_register_style('aoc', plugins_url('css/armenian-orthography-converter.css', __FILE__), array(), '2.0', 'all');

    wp_enqueue_script('aoc');
    wp_enqueue_style('aoc-style');
}

function armenian_orthography_converter_traditional() {
    echo
        '<div class="aoc">
            <input id="aoc-checkbox-traditional" type="checkbox" />
            <label for="aoc-checkbox-traditional">Աւանդական</label>
        </div>';
}

function armenian_orthography_converter_modern() {
    echo
        '<div class="aoc">
            <input id="aoc-checkbox-modern" type="checkbox" />
            <label for="aoc-checkbox-modern">Արդի</label>
        </div>';
}
?>
