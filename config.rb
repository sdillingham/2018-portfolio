require  "slim"
require  "builder"
activate :bourbon
activate :neat
activate :imageoptim
activate :livereload
activate :blog do |blog|
  blog.layout = "blog_layout"
  blog.paginate = true
  blog.page_link = "page/:num"
  blog.per_page = 2
  blog.prefix = "/blog"
  blog.permalink = "blog/{year}/{month}/{day}/{title}.html"
end
activate :directory_indexes


###
# Page options, layouts, aliases and proxies
###

page "/",        :layout => :index_layout

with_layout :interior_layout do
  page "work/*" do
    @current_section_work = true
  end
end

with_layout :blog_layout do
  page "blog/*" do
    @current_section_blog = true
  end
end

page "*.xml",    :layout => false

###
# Helpers
###

# Reload the browser automatically whenever files change
# activate :livereload

# Methods defined in the helpers block are available in templates
 helpers do
  def page_title(site_name, separator = ' – ')
    local_title = page_heading || current_page.data.title
    [site_name, local_title].compact.join(separator)
  end

  def page_heading(title = nil, options = {})
    if title
      @page_heading = title
      content_tag(:h2, title, options)
    else
      @page_heading
    end
  end

  # Combine Middleman's default page_classes with custom classes
  # and append them to the <body> element
  def custom_page_classes
    page_classes + " " + yield_content(:pageclasses).to_s
  end
 end

# Set slim-lang output style
Slim::Engine.set_default_options :pretty => true

# Enable Slim templates to use frontmatter
set :frontmatter_extensions, %w(.html .slim)

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Add path to Bower components directory
after_configuration do
 sprockets.append_path File.join "#{root}", "components"
end

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

end
