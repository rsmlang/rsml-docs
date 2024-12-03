# Data Types.





## Strings
String types can be defined via surrounding text in single or double quotes, double square brackets or backticks.

::: code-group
```rsml [Single Quotes]
SomeProperty = 'hello world'
```

```rsml [Double Quotes]
SomeProperty = "hello world"
```

```rsml [Double Square Brackets]
SomeProperty = [[
    hello world
]]
```

```rsml [Backticks]
SomeProperty = `hello world`
-- Please note that variables can't be used inside of interpolated strings.
```
:::

> [!CAUTION] 🚧 Under Construction
> Only double quote strings are available at the moment.





## Colors

There are multiple ways to define colors in rsml.

### Hex Colors
You can easily add hex codes into your style sheets via a `#` prefix:
```rsml
#C586C0
```

### Tailwind Colors

Rsml has built-in syntax for adding [tailwind colors](https://tailwindcss.com/docs/customizing-colors) into your style sheets, for example:
```rsml
tw:fuchsia:200
```

### Css Colors

Rsml has built-in syntax for adding css colors into your style sheets, for example:
```rsml
css:rebeccapurple
```


### RGB

Rgb colors can be defined as follows:
```rsml
rgb (255, 82, 24)
```


### Color3

Color3 colors can be defined as follows:
```rsml
color3 (.8, .1, .3)
```





## Measurements
A measurement is a number ending in either `px` (offset) or `%` (scale). Scale values evaluate to their decimal counterpart.

You can use a calculation of measurements to represent a pair of scale and offset values:

::: code-group
```rsml [Calculation]
25px - 50% + 12px
```

```json [Evaluates To]
{
    Scale: -0.5, // - 50%
    Offset: 37, // 25px + 12px
}
```
:::


As you can see offsets can only be added and subtracted from other offsets, the same applies to scales. However `*`, `/`, `^`, `%` operations can be used between an offset and a scale:

::: code-group
```rsml [Calculation]
12px * 50% / 12% + 50% ^ 3px
```

```json [Evaluates To]
{
    Scale: 1250, // 50% ^ 3px
    Offset: 50, // 12px * 50% / 12%
}
```
:::





## Tuples
A tuple is a grouping of other data types. They are defined by wrapping a comma separated list in brackets:
```rsml
("hello", "world")
```

You can define the data type of the tuple via an annotation:
```rsml
udim2 (50% + 25px, 13px + 12%)
```

Tuples can be given the following annotations:
| Name | Data Type | Components | Example |
| ---- | --------- | ---------- | ------- |
| udim | [UDim.new](https://create.roblox.com/docs/reference/engine/datatypes/UDim#new) | (Measurement) | udim (10px) |
| udim2 | [UDim2.new](https://create.roblox.com/docs/reference/engine/datatypes/UDim2#new) | (Measurement, Measurement) | udim2 (45% + 23px, 12px - 23%) |
| rect | [Rect.new](https://create.roblox.com/docs/reference/engine/datatypes/Rect#new) | (Scale, Scale, Scale, Scale) | rect (10, 10, 10, 10) |
| vec2 | [Vector2.new](https://create.roblox.com/docs/reference/engine/datatypes/Vector2#new) | (Scale, Scale) | vec2 (.5, .2) |
| vec3 | [Vector3.new](https://create.roblox.com/docs/reference/engine/datatypes/Vector3#new) | (Scale, Scale, Scale) | vec3 (15, 12, 11) |
| font | [Font.fromId](https://create.roblox.com/docs/reference/engine/datatypes/Font#fromId) | (Number | String, "{Enum.FontStyle}"?, "{Enum.FontStyle}"?) | font (16658221428, "SemiBold") |
| rgb | [Color3](https://create.roblox.com/docs/reference/engine/datatypes/Font#fromId) | (Number, Enum.FontWeight?, Enum.FontStyle?) | font (16658221428, SemiBold) |

A measurement, or a tuple with only one component which is a measurement, will be automatically inferred as a `udim`. This means you do not need to to wrap measurements with a udim tuple.