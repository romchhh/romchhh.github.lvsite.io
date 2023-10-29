document.getElementById("showMessage").addEventListener("click", function() {
    document.getElementById("loveMessage").style.display = "block";
    document.getElementById("loveMessage").textContent = "Я люблю Соню!!"

    const hearts = document.getElementById("hearts");
    hearts.innerHTML = "❤️❤️❤️";

    const smileys = document.getElementById("smileys");
    smileys.innerHTML = "😄😍";
});