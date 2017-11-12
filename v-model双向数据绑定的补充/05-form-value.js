function DataBind (options) {

    var obj = options.data()

    DataBind.vModel(obj)

    DataBind.vText(obj)

    DataBind.vModelChange(obj)
}

DataBind.vModel = function (obj) {
    var oInputs = document.querySelectorAll('[v-model]')
    for(var i = 0; i < oInputs.length; i++){
        var oInput = oInputs[i]
        var attrVal = oInput.getAttribute('v-model')
        oInput.value = obj[attrVal]
    }
}

DataBind.vText = function (obj) {
    var oPs = document.querySelectorAll('[v-text]')
    for(var i = 0; i < oPs.length; i++){
        var oP = oPs[i]
       var attrVal = oP.getAttribute('v-text')
       console.log(attrVal)
        oP.innerHTML = obj[attrVal]
    }
}

// 实现双向数据绑定
DataBind.vModelChange = function (obj) {
    var oInputs = document.querySelectorAll('[v-model]')
    for(var i = 0; i < oInputs.length; i++){
        var oInput = oInputs[i]
        // var attrVal = oInput.getAttribute('v-model')
        oInput.oninput = function (e) {
            // console.log(e)
            var attrVal = e.target.getAttribute('v-model')
            // console.log(attrVal)
            obj[attrVal] = e.target.value
            // console.log(obj[attrVal])
            DataBind.vText(obj)
        }
    }
}