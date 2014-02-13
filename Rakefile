# encoding: UTF-8
require 'rubygems'
begin
  require 'bundler/setup'
rescue LoadError
  puts 'You must `gem install bundler` and `bundle install` to run rake tasks'
end

require "bundler/gem_tasks"

require 'rake'
require 'rdoc/task'

require 'rake/testtask'

Rake::TestTask.new(:test) do |t|
  t.libs << 'lib'
  t.libs << 'test'
  t.pattern = 'test/**/*_test.rb'
  t.verbose = false
end

Rake::TestTask.new("test:controllers") do |t|
  t.libs << 'lib'
  t.libs << 'test'
  t.pattern = 'test/controllers/*_test.rb'
  t.verbose = false
end

Rake::TestTask.new("test:generators") do |t|
  t.libs << 'lib'
  t.libs << 'test'
  t.pattern = 'test/generators/*_test.rb'
  t.verbose = false
end

Rake::TestTask.new("test:integration") do |t|
  t.libs << 'lib'
  t.libs << 'test'
  t.pattern = 'test/integration/*_test.rb'
  t.verbose = false
end

Rake::TestTask.new("test:models") do |t|
  t.libs << 'lib'
  t.libs << 'test'
  t.pattern = 'test/models/*_test.rb'
  t.verbose = false
end

Rake::TestTask.new("test:functional") do |t|
  t.libs << 'lib'
  t.libs << 'test'
  t.pattern = 'test/functional/*_test.rb'
  t.verbose = false
end

task :default => :test

RDoc::Task.new do |rdoc|
  rdoc.rdoc_dir = 'rdoc'
  rdoc.title    = 'Ckeditor'
  rdoc.options << '--line-numbers' << '--inline-source'
  rdoc.rdoc_files.include('README.rdoc')
  rdoc.rdoc_files.include('lib/**/*.rb')
end

desc "prepare ckeditor CSS"
task :process_css do
  path = File.expand_path("../vendor/assets/javascripts/ckeditor/skins/moono", __FILE__)
  `sass-convert -F css -T scss -R #{path}`
  Dir.glob("#{path}/*.css").each { |f| File.delete(f) }
  Dir.glob("#{path}/*.scss").each do |f|
    puts f
    text = File.read(f)
    text = text.gsub(/ url\((.*)\)/, ' image-url("ckeditor/skins/moono/\1")')
    File.write(f.gsub('.scss', '.css.scss'), text)
    File.delete(f)
  end
end