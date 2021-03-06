/* eslint-disable curly */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
mapExsist = document.querySelector('#map');

if (mapExsist) {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: [55.752004, 37.617734],
            zoom: 9,
        }, {
            searchControlProvider: 'yandex#search',
        });

        // Создаём макет содержимого.

        var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxIiBoZWlnaHQ9IjExMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWx0ZXI9InVybCgjYSkiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTcuMjUgODUuOTY0YzE4LjkyNi0zLjMgMzMuMzE0LTE5LjgxMSAzMy4zMTQtMzkuNjgyQzkwLjU2NCAyNC4wMzUgNzIuNTMgNiA1MC4yODIgNiAyOC4wMzUgNiAxMCAyNC4wMzUgMTAgNDYuMjgyYzAgMTkuMjY3IDEzLjUyNyAzNS4zNzUgMzEuNjAzIDM5LjM0NUw0OS41NTUgOTZsNy42OTUtMTAuMDM2eiIgZmlsbD0iI2ZmZiIvPjwvZz48Y2lyY2xlIGN4PSI0OS45MjciIGN5PSI0NS45MjciIHI9IjM1LjkyNyIgZmlsbD0iIzBDMEMwQyIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjEuNjk4IDMzLjMyYy0yLjk2Ni0yLjk2Ni03LjgyNC0yLjk2Ny0xMC43OTUgMGwtNy4yODIgNy4yODJjLTIuOTY3IDIuOTY3LTIuOTY3IDcuODI5IDAgMTAuNzk2bDcuMjgyIDcuMjgyYzIuOTY3IDIuOTY3IDcuODI5IDIuOTY3IDEwLjc5NSAwbDcuMjgzLTcuMjgyYzIuOTY2LTIuOTY3IDIuOTY2LTcuODMgMC0xMC43OTZsLTcuMjgzLTcuMjgyem0tMTEuNTY5LS43NzVjMy4zOTgtMy4zOTMgOC45NS0zLjM5NCAxMi4zNDQgMGw3LjI4MiA3LjI4M2MzLjM5NCAzLjM5NCAzLjM5NCA4Ljk1IDAgMTIuMzQ0bC03LjI4MiA3LjI4MmMtMy4zOTUgMy4zOTUtOC45NSAzLjM5NS0xMi4zNDQgMGwtNy4yODMtNy4yODJjLTMuMzk0LTMuMzk0LTMuMzk0LTguOTUgMC0xMi4zNDRsNy4yODMtNy4yODN6bTcuNjQ4IDMuOTZhMi4wOTIgMi4wOTIgMCAwIDAtMi45NDkgMGwtOC4wMjMgOC4wMjNjLS44MS44MS0uODEgMi4xMzggMCAyLjk0OWw4LjAyMyA4LjAyM2MuODEuODEgMi4xMzkuODEgMi45NSAwbDguMDIyLTguMDIzYy44MTEtLjgxMS44MTEtMi4xMzkgMC0yLjk1bC04LjAyMy04LjAyM3ptLTMuNzIzLS43NzVhMy4xODcgMy4xODcgMCAwIDEgNC40OTggMGw4LjAyMyA4LjAyM2EzLjE4NyAzLjE4NyAwIDAgMSAwIDQuNDk4bC04LjAyMyA4LjAyM2EzLjE4NyAzLjE4NyAwIDAgMS00LjQ5OCAwTDQ2LjAzIDQ4LjI1YTMuMTg3IDMuMTg3IDAgMCAxIDAtNC40OThsOC4wMjMtOC4wMjN6IiBmaWxsPSIjRkZEMTM0Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im01MC4yMzcgMzIuOTMzLjE0LjE0LTMuNTU1IDMuNTU0LS41MS0uNTFhMi42NCAyLjY0IDAgMCAwLTMuNzIzIDBsLTguMDIzIDguMDIzYTIuNjQgMi42NCAwIDAgMCAwIDMuNzI0bDguMDIzIDguMDIzYTIuNjQgMi42NCAwIDAgMCAzLjcyMyAwbDguMDIzLTguMDIzYTIuNjQgMi42NCAwIDAgMCAwLTMuNzI0bC0zLjk1OC0zLjk1OCAzLjU1NS0zLjU1NSAzLjU4OCAzLjU4OGMzLjE4IDMuMTggMy4xOCA4LjM5IDAgMTEuNTdsLTcuMjgzIDcuMjgyYy0zLjE4IDMuMTgtOC4zODkgMy4xOC0xMS41NyAwbC03LjI4Mi03LjI4MmMtMy4xOC0zLjE4LTMuMTgtOC4zOSAwLTExLjU3bDcuMjgzLTcuMjgyYzMuMTg0LTMuMTggOC4zODktMy4xOCAxMS41NyAweiIgZmlsbD0iI0ZGRDEzNCIvPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAuNTY0IiBoZWlnaHQ9IjExMCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPjxmZU9mZnNldCBkeT0iLjExMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249Ii4xMzgiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC4wNDMxMzczIDAgMCAwIDAgMC4xMjE1NjkgMCAwIDAgMCAwLjIwNzg0MyAwIDAgMCAwLjAxMTI0NTggMCIvPjxmZUJsZW5kIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz48ZmVPZmZzZXQgZHk9Ii4yNjYiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIuMzMzIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuMDQzMTM3MyAwIDAgMCAwIDAuMTIxNTY5IDAgMCAwIDAgMC4yMDc4NDMgMCAwIDAgMC4wMTYxNTU3IDAiLz48ZmVCbGVuZCBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJlZmZlY3QyX2Ryb3BTaGFkb3ciLz48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+PGZlT2Zmc2V0IGR5PSIuNTAxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iLjYyNiIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwLjA0MzEzNzMgMCAwIDAgMCAwLjEyMTU2OSAwIDAgMCAwIDAuMjA3ODQzIDAgMCAwIDAuMDIgMCIvPjxmZUJsZW5kIGluMj0iZWZmZWN0Ml9kcm9wU2hhZG93IiByZXN1bHQ9ImVmZmVjdDNfZHJvcFNoYWRvdyIvPjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz48ZmVPZmZzZXQgZHk9Ii44OTMiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjExNyIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwLjA0MzEzNzMgMCAwIDAgMCAwLjEyMTU2OSAwIDAgMCAwIDAuMjA3ODQzIDAgMCAwIDAuMDIzODQ0MyAwIi8+PGZlQmxlbmQgaW4yPSJlZmZlY3QzX2Ryb3BTaGFkb3ciIHJlc3VsdD0iZWZmZWN0NF9kcm9wU2hhZG93Ii8+PGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPjxmZU9mZnNldCBkeT0iMS42NzEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyLjA4OSIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwLjA0MzEzNzMgMCAwIDAgMCAwLjEyMTU2OSAwIDAgMCAwIDAuMjA3ODQzIDAgMCAwIDAuMDI4NzU0MiAwIi8+PGZlQmxlbmQgaW4yPSJlZmZlY3Q0X2Ryb3BTaGFkb3ciIHJlc3VsdD0iZWZmZWN0NV9kcm9wU2hhZG93Ii8+PGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPjxmZU9mZnNldCBkeT0iNCIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjUiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC4wNDMxMzczIDAgMCAwIDAgMC4xMjE1NjkgMCAwIDAgMCAwLjIwNzg0MyAwIDAgMCAwLjA0IDAiLz48ZmVCbGVuZCBpbjI9ImVmZmVjdDVfZHJvcFNoYWRvdyIgcmVzdWx0PSJlZmZlY3Q2X2Ryb3BTaGFkb3ciLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3Q2X2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz48L2ZpbHRlcj48L2RlZnM+PC9zdmc+',
            // Размеры метки.
            iconImageSize: [85, 90],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-90 / 2, -90],
        });

        myMap.geoObjects
            .add(myPlacemark);
    });
}
