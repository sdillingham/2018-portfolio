require  "slim"
require  "builder"
activate :bourbon
activate :neat
activate :imageoptim
activate :livereload
activate :blog do |blog|
  blog.layout = "work_layout"
  blog.prefix = "/blog"
  blog.permalink = "blog/{year}/{month}/{day}/{title}.html"
end
activate :directory_indexes

###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

page "/",               :layout => :index_layout
page "/sitemap.xml",    :layout => false
with_layout :interior_layout do
  page "blog/*" do
    @current_section_blog = true
  end
  page "work/*" do
    @current_section_work = true
  end
end

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

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

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
