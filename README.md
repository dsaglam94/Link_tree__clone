# [Click here for the live site](http://link.imdawn.me/)

### Link_tree\_\_clone

I started this project to organize my links.
I wanted to create my own version just for fun and more versatility.
And of course polish my skills and practice what I learned.

I used:

- SASS
- HTML5
- Vanilla JavaScript

- Added **Dark Theme and localStorage**
- Fixed the mobile device issues caused by 'custom cursor'

> With these few lines of code the custom cursor doesn't behave and interrupt user's experience.

```
@mixin mobile-only {
    @media (pointer: coarse) {
        @content;
    }
}
```

Added the class name of the component temporarily remove it

```
@include mobile-only {
    .cursor {
        visibility: hidden;
        display: none;
    }
}
```

- Removed the unnecessary hover effects on mobile devices

> Hover effects will be disabled for mobile devices which don't have a mouse.

```
@mixin hover-desktop {
    @media (hover: hover) and (pointer: fine) {
        @content;
    }
}
```

Created the mixin and added the desired class names

```
@include hover-desktop {
    .main__title:hover .title-span {
        color: var(--clr-secondary);
        -webkit-text-stroke: 0px;
    }

    .main__links--items-container:hover .span {
        transform: translateX(50px);
    }

}
```

- Improved the accesibilty
