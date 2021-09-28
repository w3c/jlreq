# Request to revise UAX 50 for harmonization with Adobe Japan1

The [W3C Japanese Layout Task Force](https://www.w3.org/groups/tf/i18n-jlreq) is a group under the [W3C Internationalization Interest Group](https://www.w3.org/groups/ig/i18n) that is working to share information about gaps and requirements for the support of Japanese on the Web and in eBooks. The group discussed gaps between UAX 50 and implementation of vertical glyphs in Japanese fonts, and the result was the following proposal. It is endorsed by the [W3C Internationalization Working Group](https://www.w3.org/groups/wg/i18n-core) and [CITPC](Council for the Promotion of Character Information Technology)](https://moji.or.jp/).
CITPC is a general incorporated association in Japan.  CITPC aims to enhance the interoperability of text information processing in Japan.  Most of the font vendors in Japan are members of CITPC.  

### Contributors:

* Yasuo Kida (independent)
* Taro Yamamoto (Adobe)
* Nat McCully (Adobe)
* Kobayashi Toshi (independent)
* KOBAYASHI Tatsuo (independent)
* Atsushi Shimono (W3C)
* Shinyu MURAKAMI (Vivliostyle)
* MURATA Makoto (Keio University)

## Background

[UAX 50](https://www.unicode.org/reports/tr50/) was designed as a cornerstone of vertical writing for the Web and EPUB.  CITPC is grateful to the Unicode Consortium for the timely development of UAX 50 and its ongoing maintenance.   

However, there are some inconsistencies between UAX 50 and the Adobe Japan1 character collection (as defined in a GitHub repository, available at [https://github.com/adobe-type-tools/Adobe-Japan1](https://github.com/adobe-type-tools/Adobe-Japan1)).  Since many important fonts in Japan are based on the Adobe Japan1 character collection, the impact of these inconsistencies should not be underestimated.

Although the technical content of UAX 50 has been fairly stable since 2015, neither the Adobe Japan1 character collection nor existing AJ1 fonts have been modified according to UAX 50. Moreover, to the best of our knowledge, no font vendors in CITPC plan such modification.  We believe that there are two reasons. First, such modifications without changing font names will cause serious interoperability problems to existing documents and applications. Second, new fonts with different names will cause migration troubles such as installation burden and mismatch of new applications and old fonts.

CITPC requests that the Unicode Consortium revisit the categorization of four characters in UAX 50. Although the current categorization is sensible, its practical benefits are less significant than the adoption cost, as we see it.  If these changes are accepted, existing Japanese AJ1 fonts will become compliant with UAX 50. 

## Proposal

### U+2016 DOUBLE VERTICAL LINE

Current status in UAX#50: This character is classified as U.

Current status in the Adobe Japan1 character collection: cmapped to 666 (glyph for horizontal writing), which is substituted to 7895 (rotated glyph) by `vert`.

Vertical-writing behaviors of current applications: InDesign rotates this character without using the `vert` feature of OpenType.  Browsers exhibit different behaviors depending on the combination of a browser and font.

Proposal: We propose to modify the classification of this character from U to R.  


### U+2702 SCISSORS

Current status in UAX#50: This character is classified as U.

Current status in the Adobe Japan1 character collection: cmapped to 12176, which is substituted to 12178 (rotated glyph) by `vert`.  

Vertical-writing behaviors of current applications:  InDesign rotates this character.　Browsers exhibit different behaviors depending on the combination of a browser and font, but the character orientation appears to be always identical to that of U+2016

Proposal: We propose to modify the classification of this character from U to R or Tr.

### U+3030 WAVY DASH

Current status in UAX#50: This character is classified as Tr.

Current status in the Adobe Japan1 character collection: cmapped to 12218, which is not touched by `vert` 

Vertical-writing behaviors of current applications: InDesign provides the upright glyph. Most browsers provide the rotated glyph with the exception of Chrome, which provides the upright glyph no matter which font is used.

Proposal: We propose to modify the classification of this character from Tr to R. 


