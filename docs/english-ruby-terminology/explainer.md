# Ruby terminology (in English)

Based on discussions among MURATA Makoto, Florian Rivoal, Elika Etemad, and Shimono Atsushi.

## Background and motivation

The terminology in JLreq is chaotic.
Let’s use better terms in simple ruby, text-to-speech requirements, the next version of JLreq, and CLreq!
Ideally, our terms should be applicable to any document description language including HTML, CSS, OOXML, IDML, ODF, and so forth.

We intend to bring this list of terminology related to Ruby to official W3C document, such as W3C WG Note or a part of existing 
i18n-glossary, after having a consensus with other groups.

## List of terms

This document is written by group of terms, instead of each term, to make ease of understanding as explainer.

### Ruby

There are many usages of this term, such as pointing ruby annotations, pairs of ruby base and ruby annotation, or 
a concept to attach ruby annotations to their ruby bases. 

It is too late to have concensus on choosing one as a definition from these.
We propose not to use this term for pointing any certain definition, and to use only for showing broad concept of 'ruby'.

### Ruby base and annotation

Use `ruby base` and `ruby annotation`.
(These terms are generally used, not limited to Japanese.)

(formally written definition should be inserted here, with image?)

Ruby base does not necessary consist of text, and expressions or images are also used as ruby base. 
Therefore, we would propose not to use terms like `base character` or `base text`, unless term is used in a case 
that ruby base is a sequence of characters. 

### Style of ruby annotation assignment

Use `mono-style ruby`, `group-style ruby`, and `jukugo-style ruby`.
All three terms are used for styling as pairs of ruby annotations and their ruby base. 
(These terms are Japanese specific?)

(formally written definition should be inserted here, like from simple-ruby, with images)

### Fully or partially annotated ruby

Use `fully-annotated ruby markup` and `partially-annotated ruby markup` (or `ruby style`).
Several styles are used for attaching ruby annotations in commercial books, 
one is attaching ruby annotations to all of the CJK ideographic characters over the book, 
another is attaching ruby annotations to the first occurrence of each sequence of CJK ideographic characters 
in each page or in the entire book. 

In the current JLreq terminology, `general ruby` and `para ruby` are defined and used. 
`para ruby` came from Japanese term `パラルビ`. 
These concepts does not appear in css-text specification, but are used in use case documents.

### No specific terminology definition for pairs of ruby bases and ruby annotations

Some terms are desired to describe handling of ruby before or after line breaking. 
Recall that ruby elements of HTML have both ruby bases and ruby annoations, 
also recall that a ruby element can have multiple base-annotation pairs.
In the case of jukugo-ruby, line breaking may divide one base-annotation pair into two things.

No term is proposed in this terminology document, since different technologies handle such pairs differently.

### Sequence of rt and rb elements

Use `interleaved ruby` for base-annotation pairs in sequence, like 'rb rt rb rt rb rt' in HTML markup, 
and `layerd ruby` for ruby bases followed by ruby annotations, like 'rb rb rb rt rt rt' in HTML markup. 




