# Editorial guidelines
Combining the English and Japanese text in one document makes it much easier to develop and maintain content in both languages in parallel. However, it is important to follow certain steps when creating or editing the source text.

(Note that the English version will be the authoritative version, since it is more widely accessible to developers around the world.)

### Creating or modifying content

When creating new content, you should **always create markup for both English and Japanese versions**.

For example:  
```html
<p data-lang="en">Text in English.</p>
<p data-lang="ja">日本語のテキスト。</p>
```

If you are able to create text in both English and Japanese, please do so. 

**If you are only able to create text in one language**, still create the dual structure in markup, but put the same text in both places. Then add `class="translateme"` to the text that needs translation.

For example:

```html
<p data-lang="en" class="translateme">日本語のテキスト。</p>
<p data-lang="ja">日本語のテキスト。</p>
```

Likewise, if you change existing text, and if that change requires a change in the parallel translation but you are unable to do so, add `class="translateme"` to the text that needs to be updated.

**If you need someone to check the translation you provided**, add `class="checkme"` to the relevant tag.

For example:

```html
<p data-lang="en" class="checkme">Text in English.</p>
<p data-lang="ja">日本語のテキスト。</p>
```

The class names listed above produce special colouring effects in the displayed document.

When text highlighted by the `translateme` or `checkme` class is updated to a final translation, the class should be removed.


### Markup tips 

Here are some tips on how to maintain the parallel language structure in markup. The principles in these example approaches should be extended to other markup as needed.

- The English text should always come before its corresponding Japanese text.


- **List elements** need `p` elements inside them, and link anchors must go on the `li` tag.

    ```html
    <li id="abcd">
      <p data-lang="en">Text in English.</p>
      <p data-lang="zh">日本語のテキスト。</p>
    </li>
    ```


- **Paragraphs should not have link anchors**. If a link anchor is needed, it must be placed on an element that surrounds the two paragraphs. If no such element already exists, use a `div` element.

    ```html
    <div id="abcd">
      <p data-lang="en">Text in English.</p>
      <p data-lang="zh">日本語のテキスト。</p>
    </div>
    ```

- **Headings** should use `span`s for `zh` and `en` versions, and there should be a line break between spans.

    ```html
    <h2>
      <span data-lang="en">Heading in English.</span>
      <span data-lang="zh">日本語の見出し</span>
    </h2>
    ```

- **Attribute `id`s for headings** should go on `section` elements, not `h[1-6]` elements.

    ```html
    <section id="h_my_heading">
      <h2>
        <span data-lang="en">English heading</span>
        <span data-lang="zh">漢語標題</span>
      </h2>
      …
    ``` 

- **Attribute `id`s on `dfn` elements** should start with `xxdef`, where `xx` is either `ja` or `en`.

    ```html
    <p data-lang="en">The <dfn id="endef_term">term</dfn> is a technical word.</p>
    <p data-lang="zh">这个<dfn id="jadef_term">词汇</dfn>是一个技术用语。</p>
    ```

- **Figure captions** should use `span`s for the different language versions.

    ```html
    <figure>
      <!-- 図の内容。 -->
      <!-- Figure content. -->
      <figcaption>
        <span data-lang="en">Caption in English</span>
        <span data-lang="zh">日本語のキャプション</span>
      </figcaption>
    </figure>
    ```

- Use the following markup for Unicode codepoint names:

    ```html
    <span class="uname">U+3002 IDEOGRAPHIC FULL STOP</span> [。]
    ```

For additional ideas about markup and styling in Internationalization Activity documents, especially wrt inline markup conventions, see <https://www.w3.org/International/docs/styleguide>.


## Last-minute Pre-publication edits

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
    <span data-lang="zh" lang="zh">中文排版需求</span>
    ```

2. Remove:
    
    ```html
    <link rel="canonical" href="http://www.w3.org/TR/2015/WD-clreq-XXXXXXXX/"/>
    ``` 
