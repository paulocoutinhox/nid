# Nid

Nid = nest in french

Nid is a theme for [Pelican](http://docs.getpelican.com) 4.0+, a static site generator written in Python.

It is inspired by: https://github.com/molivier/nest

## Features

* Featured site header image
* Featured article header image
* **Pygments** syntax highlighting
* **Disqus** support for comments
* **Google Analytics v4** support
* **Google AdSense** support
* **Piwik** support
* RSS and Atom feeds
* Related content

## Settings

Nid template can be customized by adding parameters to your `pelicanconf.py` file. Template specifics parameters are prefixed with template name.

The header-nav have a fixed heigth of 100px. This is the max size for the logo without css modification.

The min-height for the background header is 360px. The image is displayed using background-size: cover; which scale the background image to be as large as possible so that the background area is completely covered by the background image. If smaller than screen, the image is repeated to fit the background area.

### Pelican configuration example

```python
from datetime import datetime

# theme
THEME = "nid"
CURRENT_DATETIME = datetime.now().timestamp()
MENUITEMS = [("Início", "/"), ("Categorias", "/categories.html")]
REL_CANONICAL = True

# set logo
SITELOGO = "/images/logo.png"

# use minified css
NID_MINIFY_CSS = True

# add header background image from content/images : 'background.jpg'
NID_HEADER_IMAGES = ""

# add header image banner: {'image': 'images/xyz.jpg', 'caption': 'Test Banner', 'link': 'https://github.com/paulocoutinhox/nid'}
NID_HEADER_BANNERS = []

# show banner indicators if visible
NID_HEADER_BANNERS_INDICATORS = True

# show banner navigators if visible
NID_HEADER_BANNERS_NAVIGATORS = True

# google adsense
GOOGLE_ADSENSE_PUB_ID = "ca-pub-123"

GOOGLE_ADSENSE_TOP = {
    "slot": "123456",
    "format": "auto",
    "responsive": True
}

GOOGLE_ADSENSE_BOTTOM = {
    "slot": "123456",
    "format": "auto",
    "responsive": True
}

# footer
COPYRIGHT_YEAR = datetime.now().year
COPYRIGHT_NAME = "Paulo Coutinho"

NID_SITEMAP_COLUMN_TITLE = "Mapa do site"
NID_SITEMAP_MENU = [
    ("Arquivos", "/archives.html"),
    ("Tags", "/tags.html"),
    ("Autores", "/authors.html"),
]
NID_SITEMAP_ATOM_LINK = "Atom Feed"
NID_SITEMAP_RSS_LINK = "RSS Feed"
NID_SOCIAL_COLUMN_TITLE = "Redes sociais"
NID_LINKS_COLUMN_TITLE = "Links"
NID_COPYRIGHT_COLUMN_TITLE = "Copyright"

# footer optional
NID_FOOTER_HTML = ""

# index.html
NID_INDEX_HEAD_TITLE = "Início"
NID_INDEX_HEADER_TITLE = "Meu blog pessoal para compartilhar conhecimento"
NID_INDEX_HEADER_SUBTITLE = "Compartilhando conhecimento"
NID_INDEX_CONTENT_TITLE = "Últimos posts"
NID_INDEX_PAGE_NUMBER_TITLE = "página"

# archives.html
NID_ARCHIVES_HEAD_TITLE = "Arquivos"
NID_ARCHIVES_HEAD_DESCRIPTION = "Arquivos de posts"
NID_ARCHIVES_HEADER_TITLE = "Arquivos"
NID_ARCHIVES_HEADER_SUBTITLE = "Arquivos de todas os posts"
NID_ARCHIVES_CONTENT_TITLE = "Arquivos"

# article.html
NID_ARTICLE_HEADER_BY = "Por"
NID_ARTICLE_HEADER_MODIFIED = "modificado"
NID_ARTICLE_HEADER_IN = "na categoria"
NID_ARTICLE_RELATED_TITLE = "Outros conteúdos relacionados"

# author.html
NID_AUTHOR_HEAD_TITLE = "Posts de"
NID_AUTHOR_HEAD_DESCRIPTION = "Posts de"
NID_AUTHOR_HEADER_SUBTITLE = "Arquivos de posts"
NID_AUTHOR_CONTENT_TITLE = "Posts"

# authors.html
NID_AUTHORS_HEAD_TITLE = "Lista de autor"
NID_AUTHORS_HEAD_DESCRIPTION = "Lista de autor"
NID_AUTHORS_HEADER_TITLE = "Lista de autor"
NID_AUTHORS_HEADER_SUBTITLE = "Arquivos listados por autor"

# categories.html
NID_CATEGORIES_HEAD_TITLE = "Categorias"
NID_CATEGORIES_HEAD_DESCRIPTION = "Arquivos listados por categoria"
NID_CATEGORIES_HEADER_TITLE = "Categorias"
NID_CATEGORIES_HEADER_SUBTITLE = "Arquivos listados por categoria"

# category.html
NID_CATEGORY_HEAD_TITLE = "Arquivo de categoria"
NID_CATEGORY_HEAD_DESCRIPTION = "Arquivo de categoria"
NID_CATEGORY_HEADER_TITLE = "Categoria"
NID_CATEGORY_HEADER_SUBTITLE = "Arquivo de categoria"

# pagination.html
NID_PAGINATION_PREVIOUS = "Anterior"
NID_PAGINATION_NEXT = "Próximo"

# period_archives.html
NID_PERIOD_ARCHIVES_HEAD_TITLE = "Arquivos de"
NID_PERIOD_ARCHIVES_HEAD_DESCRIPTION = "Arquivos de"
NID_PERIOD_ARCHIVES_HEADER_TITLE = "Arquivos"
NID_PERIOD_ARCHIVES_HEADER_SUBTITLE = "Arquivos de"
NID_PERIOD_ARCHIVES_CONTENT_TITLE = "Arquivos de"

# tag.html
NID_TAG_HEAD_TITLE = "Arquivo de tags"
NID_TAG_HEAD_DESCRIPTION = "Arquivo de tags"
NID_TAG_HEADER_TITLE = "Tag"
NID_TAG_HEADER_SUBTITLE = "Arquivo de tags"

# tags.html
NID_TAGS_HEAD_TITLE = "Tags"
NID_TAGS_HEAD_DESCRIPTION = "Lista de tags"
NID_TAGS_HEADER_TITLE = "Tags"
NID_TAGS_HEADER_SUBTITLE = "Lista de tags"
NID_TAGS_CONTENT_TITLE = "Lista de tags"
NID_TAGS_CONTENT_LIST = "marcado"
NID_TAGS_SINGLE_ARTICLE_TITLE = "artigo"
NID_TAGS_SEVERAL_ARTICLES_TITLE = "artigos"

# Static files
STATIC_PATHS = ["images", "extras"]

EXTRA_PATH_METADATA = {
    "extras/robots.txt": {"path": "robots.txt"},
    "extras/favicon/android-chrome-192x192.png": {"path": "android-chrome-192x192.png"},
    "extras/favicon/android-chrome-512x512.png": {"path": "android-chrome-512x512.png"},
    "extras/favicon/apple-touch-icon.png": {"path": "apple-touch-icon.png"},
    "extras/favicon/favicon-16x16.png": {"path": "favicon-16x16.png"},
    "extras/favicon/favicon-32x32.png": {"path": "favicon-32x32.png"},
    "extras/favicon/favicon.ico": {"path": "favicon.ico"},
    "extras/favicon/site.webmanifest": {"path": "site.webmanifest"},
}
```

### Disqus activation

`SITEURL` and `DISQUS_SITENAME` must be set in `publishconf.py` and/or `pelicanconfig.py` to activate the Disqus comment system:

```python
SITEURL = 'https://your-website.com'
DISQUS_SITENAME = 'your-disqus-sitename'
```

## Third-party assets

The theme uses external softwares, scripts, libraries and artworks:

* [Bootstrap](http://getbootstrap.com/) 3.4.x
* [Open Sans Font](http://www.google.com/fonts/specimen/Open+Sans)
