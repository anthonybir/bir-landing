# ABN — Estrategia de posicionamiento

*Documento operativo. Lectura única, regreso frecuente.*
*Última revisión: 2026-08-13*

---

## Tesis

ABN es una práctica de rehabilitación institucional en Paraguay. El software es la forma durable que toma esa rehabilitación cuando funciona.

Esa frase define el comprador, el embudo, el precio y la barrera de entrada. El sitio actual presenta a ABN como una agencia con servicios técnicos. La tesis correcta es otra categoría: la institución llega rota o frágil, ABN la opera hasta sanearla, y el sistema que queda es la huella.

## La asimetría que sostiene todo

Cuatro hechos que solo ABN tiene en el mercado paraguayo:

1. **Recuperación financiera medible.** AENA: morosidad 70% → 2.9% en tres años bajo dirección directa, dentro de regulación MEC. Señal costosa — imposible de fingir, exige tiempo real en la institución.
2. **El director es el operador.** La persona que firma como ABN es la misma que opera el colegio que se vende como caso. Sin esa coincidencia, los demás puntos pierden peso.
3. **Marco pedagógico propio.** MEAA 3.0 en producción durante seis años — sin tareas, sin exámenes, ABP, alineado al MEC.
4. **Familia operativa multidisciplinaria.** Pedagogía (Diana), derecho (Danae), financiero (Stephanie) bajo una sola dirección. No una agencia de freelancers; una unidad.

Cada hecho es difícil de copiar. Juntos, son frontera de mercado.

## Lo que el sitio actual omite

El número que vuelve creíble todo lo demás — 70% → 2.9% — está fuera del sitio. Sin ese dato, los tres casos parecen demos institucionales. Con ese dato, son consecuencia de algo más profundo.

Además, el sitio actual habla de capacidades (qué hace el sistema) cuando debería hablar de transformaciones (qué pasó en la institución). El arco *antes → ahora* está implícito y debería ser explícito en cada caso:

- **AENA**: papel y lápiz (2020, riesgo de cierre por COVID) → planificación anual y diaria, libreta digital, portal de padres, *curriculum builder* con IA por encima del estándar MEC. Morosidad institucional 70% → 2.9%.
- **IPUPY**: tesorería fragmentada → contabilidad institucional auditable, ~30 iglesias, cierre mensual de un día.
- **IBA**: enseñanza pastoral artesanal → material de estudio bíblico y alcance asistido por IA, red multipaís bajo un solo estándar editorial.

## Arquitectura por página

**`/` (home)** — Entrada. Una afirmación que el visitante paraguayo reconoce de inmediato. La morosidad recuperada es la candidata natural; ningún director de institución mediana lee "70% → 2.9%" sin detenerse.

**`/casos`** — Prueba. Tres rescates, no tres productos. KPIs reales (morosidad, sedes, países, tiempo de cierre); no métricas operativas internas tipo "ajustes/mes" que sólo significan algo adentro de ABN.

**`/nosotros`** — Origen. Estructura actual mantenida: el portfolio como retrato (sin foto) funciona y es raro en el mercado. Lleva el rescate de 2020, la morosidad recuperada y **las dos verticales nombradas**: un colegio de ~300 alumnos y la tesorería de ~30 iglesias. La asimetría 2 (el director es el operador) se sostiene en las dos porque la ficha de dirección nombra los dos cargos. Sin ese dato, la vertical de tesorería se lee como cliente y no como operación propia.

**`/servicios`** — Oferta. **Dos verticales con prueba: educación y organizaciones eclesiásticas.** Los tres modos (diagnóstico, implementación, acompañamiento) se presentan sector-agnósticos; el detalle nombra las dos verticales sin que ninguna sea el modelo de la casa. El MEC aparece como el regulador del caso educativo, no como el regulador a secas.

**`/aula`** — Producto. Vertical educativa específica. Mantiene su lógica actual.

**`/ia-gobernada`** — Método. Cómo ABN usa IA: gobernada, trazable, con revisión humana obligatoria. Sostiene la frontera frente al chatbot mágico. No vende IA; vende gobierno de IA.

**`/blog`** — Evidencia en el tiempo. Criterio y casos contados en primera persona. Cada post refuerza la tesis de rehabilitación institucional. Nada de contenido genérico de marketing.

**`/en`** — Línea de negocio separada: servicios de relocación para familias angloparlantes. No participa de la tesis de rehabilitación institucional y se gobierna aparte. No mezclar con la narrativa institucional en español.

## Plano visual

Las reglas de diseño no viven acá. Viven en `README.md`, y el sistema de tokens
en `src/app/globals.css`. Este documento define qué dice el sitio; el README
define cómo se ve. Una regla vive en un solo lugar.

Lo que sí corresponde registrar acá es la consecuencia para el copy: **cada
página larga necesita una sección que aguante ser la más fuerte visualmente**,
porque lleva una sola banda oscura a media altura y esa banda es el momento de
mayor peso de la página. Hoy la banda cae en:

| Página | Sección | Por qué |
|---|---|---|
| `/` | Prueba numérica | La morosidad recuperada es el ancla de toda la tesis. |
| `/servicios` | No somos para | El límite es lo más fuerte que dice la página. |
| `/ia-gobernada` | En producción, hoy | Números verificables, no promesa de IA. |
| `/casos` | Plataforma | Aula es propiedad de la agencia, no software suelto. |
| `/nosotros` | Cómo decidimos | El criterio es el retrato. |
| `/en` | Why ABN | Credibilidad, la única barrera en relocación. |

Las páginas cortas o funcionales (`/aula`, `/blog`, `/contacto`) no llevan
banda. Si una página nueva no tiene una sección que merezca ese peso, el
problema es del copy, no del diseño.

Dos reglas más condicionan qué se puede escribir:

- El marco con barra de navegador marca **software real en producción**. No se
  usa para diagramas ni para láminas. Un caso sin captura de producto no puede
  fingir una.
- El dorado de señal se gasta **una vez por vista**. Elegir cuál número lo
  recibe es decisión de posicionamiento, no de diseño. Hoy: la morosidad
  recuperada en `/` y los prompts publicados en `/ia-gobernada`.

## Alcance institucional: la decisión de `/servicios`

*Resuelta 2026-08-13.*

**Dos verticales con prueba, no tres con una aspiracional.** El sitio nombra
educación y organizaciones eclesiásticas. Nada más.

La tensión real nunca fue colegios contra no-colegios. Fue prueba contra
aspiración. Tres de las cuatro asimetrías son de forma educativa, pero dos
también se sostienen en IPUPY: el director es el operador (Anthony es tesorero de
IPUPY) y hay recuperación medible (~30 iglesias, cierre mensual de un día). No
hay una vertical con prueba. Hay dos.

"Instituciones y pymes" no tenía ninguna de las dos: sin caso, sin identidad de
operador, sin número. Era la única línea del sitio que rompía su propia regla de
que la operación propia es el testimonio hasta que exista caso 04. Salió.

Abrir a pymes disuelve las cuatro asimetrías a la vez: una pyme compra
consultoría de proceso, donde ABN compite por precio contra cualquier fábrica de
software. Es el mismo error que "reabrir la categoría ed-tech", apuntado en la
otra dirección. Por eso el filtro es explícito y vive en «No somos para».

Nombrar un sector que no se puede probar no amplía el mercado. Hace que las dos
verticales probadas parezcan un menú en vez de una frontera.

## Lo que el sitio no debe hacer

- Reabrir la categoría *ed-tech latinoamericana*. Baja precio, borra frontera.
- Prometer personalización ilimitada. La oferta es disciplina, no flexibilidad de boutique.
- Agregar más servicios visibles. Tres modos es la arquitectura.
- Exponer testimonios de clientes externos hasta que exista caso 04. La operación propia es el testimonio.
- Agregar foto del fundador. La decisión actual ("el trabajo es el retrato") es correcta y rara.

## Plan de ejecución

**Paso 1 — `/nosotros`** *(15 min, riesgo bajo)*
Insertar rescate 2020 + morosidad recuperada en el párrafo central. Reescribir la entrada AENA del portfolio como arco *antes → ahora*. Sin tocar estructura ni componentes.

**Paso 2 — `/casos`** *(30 min, riesgo bajo)*
Agregar KPI de morosidad al caso AENA. Reemplazar una métrica del hero por dato concreto. Reescribir los tres casos con arco *antes → ahora* en el panel de Alcance/Resultado.

**Paso 3 — `/` y `/servicios`** *(decisión estratégica)*
La home necesita la línea de morosidad como ancla numérica. Servicios necesita rebalanceo para abrir TAM más allá de colegios. Antes de editar: alineación explícita sobre cuánto se abre el alcance institucional y cuánto se mantiene la verticalidad educativa como vidriera principal.

Pasos 1 y 2 son edición quirúrgica. Paso 3 es decisión de posicionamiento.

**Estado a 2026-08-13.** Los tres pasos están ejecutados. El arco *antes → ahora*
y el KPI de morosidad están en `/nosotros` y `/casos`; la home lleva
`70% → 2,9%` como ancla numérica; `/servicios` cerró su decisión de alcance.

## Riesgo y disciplina

El sitio actual está bien construido. La tentación es reescribir todo. La regla operativa es la opuesta: cada cambio justifica su presencia o queda fuera. El objeto debe seguir sosteniéndose en silencio. Lo que se agrega ahora es densidad de prueba, no volumen.

## Próximo paso

Ejecutar pasos 1 y 2 esta misma sesión. Mostrar el resultado. Recién después, conversación de posicionamiento sobre home y servicios.
