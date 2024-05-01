#  W3schools React UI Component ;

## Introduction: 
The W3schools React Component  build base UI W3Schools for use in React;
### 1 Install :

```bash
npm i w3schools-react-ui
```
### 2 Use in react :

```tsx
import React from "react";
import { Button, Coupon, Divider, Popup, TextDivider } from "w3schools-react-ui";

const App: React.FC = () => {
  return (
    <div
      style={{ marginTop: "200px", display: "flex", justifyContent: "center" }}
    >
      <div>
        <Button effect="pressed" text="Click here" size="medium" />

        <TextDivider
          text="Hello"
          dividerColor="green"
          textColor="red"
          size="30"
        />
        <Divider type="dotted" />
        <Popup content="HI" text="This is popup" />
        <Coupon
          imgPromo="https://www.w3schools.com/w3images/hamburger.jpg"
          content="OK"
          title="Your title"
        />
      </div>
    </div>
  );
};

export default App;


```



### License :

MIT License

Copyright (c) 2024  **thind9xdev** x **mia_nguyen** x **W3.CSS**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.