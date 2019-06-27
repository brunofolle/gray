# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "gray"
  spec.version       = "0.1.0"
  spec.authors       = ["Bruno Folle"]
  spec.email         = ["bruno_folle@live.com"]

  spec.summary       = "A Simple and Elegant Theme for Jekyll"
  spec.homepage      = "https://brunofolle.com.br"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"
  spec.add_runtime_dependency "jekyll-feed"
  spec.add_runtime_dependency "jekyll-sitemap"
  spec.add_runtime_dependency "jekyll-seo-tag"
  spec.add_runtime_dependency "jekyll-paginate"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
