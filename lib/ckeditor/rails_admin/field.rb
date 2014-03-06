require 'rails_admin/config/fields/types/ck_editor'

module RailsAdmin::Config::Fields::Types
  class Ckeditor < RailsAdmin::Config::Fields::Types::CKEditor
    RailsAdmin::Config::Fields::Types::register(:ckeditor, self)
  end
end
