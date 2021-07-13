require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name           = 'smartlook-react-native-bridge'
  s.version        = package['version']
  s.summary        = package['description']
  s.description    = package['description']
  s.license        = package['license']
  s.author         = package['author']
  s.homepage       = package['homepage']

  s.requires_arc   = true
  s.platform       = :ios, '8.0'

  s.source           = { :http => 'https://sdk.smartlook.com/ios/rn/smartlook-react-native-bridge-ios-0.30.zip' }
  s.preserve_paths = 'LICENSE', 'README.md', 'package.json', 'index.js'
  s.source_files   = 'ios/*.{h,m}'
  s.public_header_files = 'ios/RNSmartlook.h'

  s.static_framework = true

  s.dependency 'React'
  s.dependency 'Smartlook', '>= 1.7.6'

end
