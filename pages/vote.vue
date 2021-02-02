<template>
    <div class="page-content">
        
        <!-- user sudah memilih -->
        <AlertVoteDone v-if="isVoted"/>

        <!-- user bukan dpt -->
        <AlertNonDPT v-if="isNonDPT" />
        
        <!-- countdown telah selesai -->
        <div v-if="isVotingStarted" class="vote">
            <div class="calonKetua">
                <div class="container">
                    <h1>CALON KETUA</h1>
                    <div class="row justify-content-center">
                        <div class="col-sm-4 col-md-4 ">
                            <div class="calon">
                                <div class="nama-calon">
                                    <h3>Gde Anantha</h3>
                                </div>
                                <img src="@/public/images/1.png" alt="">
                                <a  class="btn btn-warning btn-lg" @click="showModal = true">VOTE</a>
                            </div>
                        </div>
                        <div class="col-sm-4 col-md-4">
                            <div class="calon">
                                <div class="nama-calon">
                                    <h3>Kotak Kosong</h3>
                                </div>
                                <img src="@/public/images/2.png" alt="">
                                <a  class="btn btn-warning btn-lg" @click="showModal = true">VOTE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="calonSenator">
                <div class="container">
                    <h1>CALON SENATOR</h1>
                    <div class="row justify-content-center">
                        <div class="col-sm-4 col-md-4 ">
                            <div class="calon">
                                <div class="nama-calon">
                                    <h3>Gde Anantha</h3>
                                </div>
                                <img src="@/public/images/1.png" alt="">
                                <a  class="btn btn-warning btn-lg" @click="showModal = true">VOTE</a>
                            </div>
                        </div>
                        <div class="col-sm-4 col-md-4">
                            <div class="calon">
                                <div class="nama-calon">
                                    <h3>Kotak Kosong</h3>
                                </div>
                                <img src="@/public/images/2.png" alt="">
                                <a  class="btn btn-warning btn-lg" @click="showModal = true">VOTE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Modal -->
            <div v-if="showModal">
                <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Apakah Anda Yakin?</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" @click="showModal = false">&times;</span>
                            </button>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" @click="isVoted = true, showModal = True">Ya</button>
                            <button type="button" class="btn btn-secondary" @click="showModal = false">Tidak</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </transition>
            </div>
        </div>

        <!-- countdown masih berlangsung -->
        <div v-else class="countdown">
            <Countdown v-on:start-vote="startVote"/>
        </div>        
    </div>
</template>

<script>
import Countdown from '@/components/Countdown'
import AlertVoteDone from '@/components/AlertVoteDone'
import AlertNonDPT from '@/components/AlertNonDPT'

export default {
    data : () => ({
        isVotingStarted :true,
        isVoted : false,
        isNonDPT : false,
        showModal : false,
    }),
    components :{
        Countdown,
        AlertVoteDone,
        AlertNonDPT
    },
    methods : {
        startVote(){
            this.isVotingStarted = !this.isVotingStarted;
        }
    },
}
</script>

<style lang="scss" scoped>

    .calonKetua {
        text-align: center;

        h1 {
            text-align: center;
            margin-bottom: 20px;
            margin-top : 20px;
            font-weight: bold;
        }
    }
    
    .calonSenator {
        margin-top : 50px;
        text-align: center;

        h1 {
            text-align: center;
            margin-bottom: 20px;
            margin-top : 40px;
            font-weight: bold;
        }
    }

    .calon {
        padding : 15px;
        margin-right: 20px;
        margin-left: 20px;
        border-radius : 20px;
        border : 2px solid #333;
        transition: all 0.30s linear 0s;

        .btn {
            color : #333;
            font-weight: bold;
            background-color: #ffc801;
            border-color: #333;
            margin-top : 10px;
        }
    }

    .calon:hover {
        border:2px solid#ffc801;
    }
    .calon img{
        width: 100%;
        height: auto;
        border: 2px solid #333;
        border-radius: 20px;
        transition: all 0.30s linear 0s;
    }

    .calon:hover img{
        border:2px solid#ffc801;
    }

    @media only screen and (max-width: 990px){
        .calon{ margin-bottom:20px; }
    }



    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
    .modal-header, .modal-body, .modal-footer{
        background-color: #ffc801;
        justify-content: center;
    }
    .btn-primary {
        background-color: #3EA0AD;
    }

    .btn-secondary{
        background-color: #D04C3D;
    }
</style>