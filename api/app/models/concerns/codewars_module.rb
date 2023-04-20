module CodewarsModule
    def code_challenges
        def to_camel_case(str)
            regexFilter = /(?:(?<=^| )|[_-])[A-Za-z][^ _-]*/
            str.gsub(regexFilter) do |s|
                c1 = s[0]
                case c1
                when /[A-Za-z]/
                c1 + s[1..-1].downcase
                else
                s[1].upcase + s[2..-1].downcase
                end
            end
        end

        html = open("https://www.codewars.com/kata/latest")
        doc = Nokogiri::HTML(html)
        nokogiriKatas = doc.css(".ml-2")
        kataIDs = []
        nokogiriKatas.each do |kata|
            kataIDs.push({ to_camel_case(kata.text.strip.downcase.split(" ").join("-")) => kata.attributes["href"].value.delete_prefix("/kata/") })
        end
        katas = []
        kataIDs.each do |kataID|
            url = "https://www.codewars.com/api/v1/code-challenges/#{kataID["#{kataID.keys[0]}"]}"
            uri = URI.parse(url)
            response = Net::HTTP.get_response(uri)
            katas.push(JSON.parse(response.body))
        end
        return katas
    end
end