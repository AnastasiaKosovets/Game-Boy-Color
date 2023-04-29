# Geekshubs Academy FSD 04-2023
Primer proyecto - Videoconsola con CSS

## Tabla de contenidos

- [Inspiración:sparkles:](#cómo-funciona)
- [Proceso⛏️](#desarrollo)
- [Funcionamiento:bulb:](#desarrollo)
- [Principales errores:bomb:](#errores-conocidos)
- [Licencia y Copyright📃](#licencia-y-copyright)

### Inspiración

La inspiración ha sido basada en la videoconsola Nintendo Game Boy Color del año 1998, pero aplicando un color y gradiente personalizado.
![image](https://i.ibb.co/FhpHg19/game-Boy-Insp.png)

<!-- ### Cómo funciona

Esta réplica de la videoconsola portátil Nintendo Game Boy Color puede ejecutarse desde el navegador web y es capaz de realizar varias acciones:
- Pulsando el botón **START**, la consola lanza en su pantalla una animación del arranque original de la consola, además de iluminar el piloto **led** que encontramos junto al símbolo **POWER**. -->


- Situando el cursor sobre el cartucho que encontrarás a la derecha de la consola, este realizará una transición, aumentando de tamaño, si pulsas sobre él, la animación que la consola lanzará esta vez será de una de las escenas más representativas del juego original, Pokémon Amarillo.


- Todos los botones **cambiarán de aspecto al clicar** sobre ellos, aunque a excepción del botón START, ninguno realizará otra acción.

### Desarrollo

En el desarrollo de la videoconsola y del cartucho del videojuego se ha empleado HTML y CSS, con algunos elementos Javascrip.
- El cuerpo de la consola está construido con un **display:grid**, dividiendo así los elementos principales, herramienta que también se ha empleado para la cruceta y el altavoz frontal.
- Todos los elementos están creados de cero con HTML y CSS, a excepción de los logotipos de Nintendo, Game Boy Color, la imagen de la pegatina del cartucho y el logotipo de Nintendo GameBoy integrado en el frontal superior del cartucho. Sin embargo, tanto el logotipo de Nintendo del frontal de la máquina como el del cartucho, están tratados con filtros de opacidad y brillo desde CSS.
- Los únicos elementos de javascript se encuentran en el botón START y en el cartucho. Con elementos oneclick y función de cambio de clases para lograr los efectos deseados.
![image](https://user-images.githubusercontent.com/122631261/213939728-91b64e91-5dc0-4ead-9623-39a0b0a86bc8.png)

### Errores conocidos

Aunque no se trata de un error que impida el buen funcionamiento de la web, el piloto led de encendido funciona junto al activado y desactivado del botón START y haciendo click sobre el CARTUCHO. Si en lugar de activar y desactivar cada una de las animaciones, se pulsan seguidas, las animaciones y el piloto led se desincronizarán.

### Licencia y Copyright

El logotipo de Nintendo y Game Boy Color, son propiedad de Nintendo Co., Ltd. 