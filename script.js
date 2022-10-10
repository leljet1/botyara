const chatid = "-1001773737953",
  token = "5734788892:AAG2UYIMS6yWibBnUqBKRYHLSv-aWNDt7oI";

let asad = prompt('напишите сообение')
function otpravka(token, text, chatid) {
  let z = $.ajax({
    type: "POST",
    url:
      "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatid,
    data: "parse_mode=HTML&text=" + encodeURIComponent(text),
  });
}

otpravka(token, asad, chatid);
