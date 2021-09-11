$.support.cors = true;

$('#bt_request').click(
    function(){                                
        $.ajax({
            type:'POST',
            url:'http://192.168.10.14:8091/mail/send',
            contentType: "application/json",
            crossDomain: true,
            headers:{
                Authorization : "Basic "+btoa("ads:adsunifasipe2021")
            },
            data: '{"nome":"Willian","email":"willian.hubner",'+
            '"site":"ola","corpo":"adhaushduashdusahd"}',
            success: function(data){
                console.log(data);                                        
            },
            error: function(data){
                console.log(data);            
            }
        })
    }
);