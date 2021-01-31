<template>
    <div class="page-content text-center">
        <h1>TATA CARA</h1>
      
        <div class="mx-auto w-75 accordion" role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-1 variant="warning" class="title">Bab 1</b-button>
              </b-card-header>
              <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="text">{{ bab1 }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-2 variant="outline-warning" class="title">Bab 2</b-button>
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="text">{{ bab2 }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-3 variant="outline-dark" class="title">Bab 3</b-button>
              </b-card-header>
              <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="text">{{ bab3 }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            bab1: `
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                synth nesciunt you probably haven't heard of them accusamus labore VHS.
            `,
            bab2: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed nibh 
                eget ante porttitor viverra vel vitae sem. Quisque non nulla imperdiet erat 
                ultricies maximus. Sed nulla arcu, consequat nec efficitur egestas, lobortis 
                sit amet turpis. Vestibulum dapibus eleifend mauris vitae elementum. Maecenas 
                sit amet odio dui. Phasellus elementum dui convallis, fermentum risus sit amet, 
                accumsan magna. Sed vulputate tellus at sagittis suscipit. Vivamus non orci 
                vel sapien feugiat accumsan. Phasellus quis fringilla risus, sed faucibus orci. 
                Phasellus lorem ex, malesuada in nulla id, porta tristique sem. In hac habitasse 
                platea dictumst. Sed eleifend magna vel consectetur pretium. Ut nec ex varius, 
                convallis eros vel, ultrices ligula. Nulla imperdiet imperdiet sapien vitae feugiat. 
                Suspendisse potenti.
            `,
            bab3:`
                Morbi sit amet varius orci. Sed et ipsum pulvinar, commodo est eu, commodo ligula. 
                Maecenas sagittis sem sed efficitur aliquam. Donec id urna quis magna accumsan faucibus 
                in nec risus. Etiam ac ipsum in turpis sagittis faucibus eu ut neque. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis porta varius 
                ante vitae finibus. Sed rutrum nibh non ex sagittis, laoreet suscipit est elementum. 
                Sed hendrerit efficitur auctor. Mauris velit urna, sagittis non velit id, fringilla 
                consectetur tellus. Donec metus turpis, interdum eu nisi pellentesque, fringilla posuere 
                sem. Mauris vehicula massa lectus, et dictum enim tempor at.

            `
        }
    }
}
</script>
<style lang="scss">



/* Judul Utama */
h1{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 110px;
    text-align: center;
}

/* Subjudul per Bab */
.title{
    font-family: Roboto;
    font-style: normal;
    font-size: 24px;
    line-height: 41px;
    display: flex;
    align-items: center;

    color: #000000;
}

/* Isi Bab */
.text{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: justify;

    color: #000000;
}

</style>