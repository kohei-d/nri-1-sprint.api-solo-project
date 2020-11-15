# Prefectures API

## <span style="color:yellow">Description</span>
___
   
you are able to ..
* get all prefectures
* add a prefecture
* update a prefecture
* delete a prefecture
  
## <span style="color:yellow">Usage</span>
___
### [ Get all prefectures ]
| <span style="color:#5bc0de">Request</span> | |
|:----------------:|:----------------:|
| Method | GET |
| Path | /prefs |  

| Response | |
|:----------------:|:----------------:|
| Stutus | 200 |
| Body | [ { id:XX, name:"XXX" }, ... ] |
  
### [ Add a prefecture ]  
| <span style="color:#5bc0de">Request</span>  | |
|:----------------:|:----------------:|
| Method | PUT |
| Path | /prefs |  
| Body | {name:"XXXX"} |

| <span style="color:#5bc0de">Response</span>  | |
|:----------------:|:----------------:|
| Stutus | 201 |
| Body | { id:XX, name:"XXX" } |
  
### [ Update a prefecture ]  
| <span style="color:#5bc0de">Request</span>  | |
|:----------------:|:----------------:|
| Method | PATCH |
| Path | /prefs |  
| Body | {id:XX name:"XXXX"} |

| <span style="color:#5bc0de">Response</span> | |
|:----------------:|:----------------:|
| Stutus | 200 |
| Body | { id:XX, name:"XXX" } |

### [ Delete a prefecture ]  
| <span style="color:#5bc0de">Request</span>  | |
|:----------------:|:----------------:|
| Method | DELETE |
| Path | /prefs/XX |  

| <span style="color:#5bc0de">Response</span> | |
|:----------------:|:----------------:|
| Stutus | 200 |

