# Derives

> [!CAUTION] 🚧 Under Construction
> Deriving is not available yet.


You are able to use another style sheet as a base for the current style sheet via a derive declaration:

```rsml
@derive "./path/to/style/sheet/here"
```

This declaration imports all variables, rules and macros from the style sheet defined at the path into the current style sheet.

The inclusion of the `.rsml` file extension at the end of the path is optional.