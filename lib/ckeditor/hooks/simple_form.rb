module Ckeditor::Hooks::SimpleForm
  class CkeditorInput < ::SimpleForm::Inputs::Base
    def input
      @builder.cktext_area(attribute_name, input_html_options)
    end
  end
end

::SimpleForm::FormBuilder.map_type :ckeditor, :to => Ckeditor::Hooks::SimpleForm::CkeditorInput
