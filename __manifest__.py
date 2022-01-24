{
    'name': 'Theme Courses Custom',
    'description': 'Courses website theme',
    'category': 'Theme',
    'sequence': 1000,
    'version': '1.1',
    'depends': ['base', 'website', 'courses'],
    'data': [
        'views/assets.xml',
        'views/layout.xml',
        'views/template.xml',
        'views/custom_snippet.xml'
    ],
    'images': [
        'static/description/cover.png',
        'static/description/theme_default_screenshot.jpg'],
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
}
