# qr-commander

![qr-commander](./docs/qr-commander.png)

a react app for generating qr-commander codes for Jibo.

site: [http://wwlib.org/qr-commander/](http://wwlib.org/qr-commander/)

#### building

npm -v
6.4.1

node -v
v8.12.0

```
yarn
yarn start

http://localhost:3000/
```

#### enabling qr-commander on Jibo
- Jibo software version >= 2.0.0 is required
- use Jibo's menu to enable qr-commander
- show qr-commander-generated codes to Jibo to give him things to say


#### codes
 - must start with `ESML[#]` followed by text or ESML (Embodied Speech Markup Language)
 - see the Examples pulldown for ESML examples