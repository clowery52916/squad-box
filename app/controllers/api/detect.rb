require 'net/http'
require 'uri'
require 'json'

uri = URI("http://api.kairos.com/detect")

# put your keys in the header
headers = {
    "app_id": "e70fee1f",
    "app_key": "98112e824f82622206d370dae6ed74b9"
}

payload = {"image" => "YOUR_IMAGE_URL"}

# create the HTTP objects
http = Net::HTTP.new(uri.host, uri.port)
request = Net::HTTP::Post.new(uri.request_uri, headers)
request.body = payload.to_json

# make request
response = http.request(request)

print response.body
