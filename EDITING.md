# Editorial guidelines
Combining the English and Japanese text in one document makes it much easier to develop and maintain content in both languages in parallel. However, it is important to follow certain steps when creating or editing the source text.

(Note that the English version will be the authoritative version, since it is more widely accessible to developers around the world.)

### Creating or modifying content

When creating new content, you should **always create markup for both English and Japanese versions**.

For example:  
```html
<p its-locale-filter-list="en" lang="en">Text in English.</p>
<p its-locale-filter-list="ja" lang="ja">日本語のテキスト。</p>
```

If you are able to create text in both English and Japanese, please do so. 

**If you are only able to create text in one language**, still create the dual structure in markup, but put the same text in both places. Then add `class="translateme"` to the text that needs translation.

For example:

```html
<p its-locale-filter-list="en" lang="en" class="translateme">日本語のテキスト。</p>
<p its-locale-filter-list="ja" lang="ja">日本語のテキスト。</p>
```

Likewise, if you change existing text, and if that change requires a change in the parallel translation but you are unable to do so, add `class="retranslateme"` to the text that needs to be updated.

For example:

```html
<p its-locale-filter-list="en" lang="en" class="retranslateme">Text in English.</p>
<p its-locale-filter-list="ja" lang="ja">日本語のテキストを更新しました。</p>
```

**If you need someone to check the translation you provided**, add `class="checkme"` to the relevant tag.

For example:

```html
<p its-locale-filter-list="en" lang="en" class="checkme">Text in English.</p>
<p its-locale-filter-list="ja" lang="ja">日本語のテキスト。</p>
```

The class names listed above produce special colouring effects in the displayed document.

When text highlighted by the `translateme`, `retranslateme`, or `checkme` class is updated to a final translation, the class should be removed.


### Markup requirements 

Here are some tips on how to maintain the parallel language structure in markup. The principles in these example approaches should be extended to other markup as needed.

- The English text should always come before its corresponding Japanese text.


- **List elements** need `p` elements inside them, and link anchors must go on the `li` tag.

    ```html
    <li id="abcd">
      <p its-locale-filter-list="en" lang="en">Text in English.</p>
      <p its-locale-filter-list="ja" lang="ja">日本語のテキスト。</p>
    </li>
    ```


- **Paragraphs should not have link anchors**. If a link anchor is needed, it must be placed on an element that surrounds the two paragraphs. If no such element already exists, use a `div` element.

    ```html
    <div id="abcd">
      <p its-locale-filter-list="en" lang="en">Text in English.</p>
      <p its-locale-filter-list="ja" lang="ja">日本語のテキスト。</p>
    </div>
    ```

- **Headings** should use `span`s for `ja` and `en` versions, and there should be a line break between spans.

    ```html
    <h2>
      <span its-locale-filter-list="en" lang="en">Heading in English.</span>
      <span its-locale-filter-list="ja" lang="ja">日本語の見出し</span>
    </h2>
    ```

- **Attribute `id`s for headings** should go on `section` elements, not `h[1-6]` elements.

    ```html
    <section id="h_my_heading">
      <h2>
        <span its-locale-filter-list="en" lang="en">Heading in English</span>
        <span its-locale-filter-list="ja" lang="ja">日本語の見出し</span>
      </h2>
      …
    ``` 

- **Attribute `id`s on `dfn` elements** should start with `xxdef`, where `xx` is either `ja` or `en`.

    ```html
    <p its-locale-filter-list="en" lang="en">The <dfn id="endef_page_format">page format</dfn> of a Japanese document is specified by:</p>
    <p its-locale-filter-list="ja" lang="ja">日本語文書の<dfn id="jadef_page_format">組体裁</dfn>は，以下の順序で設計する．</p>
    ```

- **Figures and figure captions** should repeat the information. Japanese images are stored in images_ja directory. Captions use `span`s for the different language versions. There is just one id for the figure.

    ```html
    <figure id="myid">
      <img its-locale-filter-list="en" lang="en" src="images/mypicture.png"/>
      <img its-locale-filter-list="ja" lang="ja" src="images_ja/mypicture.png"/>
      <figcaption>
        <span its-locale-filter-list="en" lang="en">Caption in English</span>
        <span its-locale-filter-list="ja" lang="ja">日本語のキャプション</span>
      </figcaption>
    </figure>
    ```

- Use the following markup for **Unicode codepoint names**:

    ```html
    <span class="codepoint" translate="no"><span lang="ja">。</span> [<span class="uname">U+3002 IDEOGRAPHIC FULL STOP</span>]</span>
    ```

- To link to a section, use the Respec feature, ie. link to the id on the section tag and leave the link text empty.

    ```html
    <a class="sec_ref" href="#mySectionId"></a>
    ```

- To link to a figure, use the Respec feature, ie. link to the id on the figure tag and leave the link text empty.

    ```html
    <a class="fig_ref" href="#myFigureId"></a>
    ```


For additional ideas about markup and styling in Internationalization Activity documents, especially wrt inline markup conventions, see <https://www.w3.org/International/docs/styleguide>.


## Last-minute Pre-publication edits

THIS SECTION NEEDS REVIEW. THINGS MAY HAVE CHANGED SINCE IT WAS WRITTEN.

**Make the following changes to the respec file before pushing to GitHub:**

1. Change the path in following code to the location of the document that is about to be published:
    
    ```html 
    <link rel="canonical" href="http://www.w3.org/TR/2015/WD-clreq-XXXXXXX/"/>
    ```

2. Change `previousPublishDate` to reflect the date of the last publication. 

**Make the following edits to the snapshot of the file that will be published to TR.**

1. Convert the content of the `h1` tag to the following:

    ```html
    Requirements for Chinese Text Layout 
    <span its-locale-filter-list="ja" lang="ja" lang="ja">中文排版需求</span>
    ```

2. Remove:
    
    ```html
    <link rel="canonical" href="http://www.w3.org/TR/2015/WD-clreq-XXXXXXXX/"/>
    ``` 
