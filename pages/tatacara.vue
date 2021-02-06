<template>
    <div class="page-content text-center">
      	<h1>TATA CARA</h1>
		<div class="container">
        	<div class="mx-auto w-100 accordion" role="tablist">
        	    <b-button block v-b-toggle.accordion-1 variant="outline-warning" class="title">
					<h2>Bagian I</h2>
					<h2 class="laptop">&nbsp:&nbsp Pendaftaran</h2>
					<span class="when-open">
						<img src="@/public/images/icon-triangle-down.png" class="icon-triangle">
					</span>
					<span class="when-closed">
						<img src="@/public/images/icon-triangle-right.png" class="icon-triangle">
					</span>
				</b-button>
        	    
        	    <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
					<b-card no-body class="mb-1">
        	    		<b-card-body>
        	      			<b-card-text class="text">
								<h2 class="mobile">Pendaftaran</h2>
								<ol type="1">
									<li>Pendaftaran calon ketua himpunan dan senator dilakukan secara daring.</li>
									<li>Waktu dan <i>platform</i> pendaftaran akan ditentukan dan diumumkan oleh Panitia Pemilu HMIF 2021.</li>
									<li>Pendaftaran dilakukan sendiri (tidak dapat diwakilkan orang lain) oleh bakal calon ketua HMIF atau bakal calon senator HMIF. </li>
									<li>Melengkapi berkas pendaftaran calon, yang terdiri dari:</li>
									<ol type="a">
										<li>Untuk calon Ketua HMIF</li>
										<ol type="i">
											<li>Formulir pendaftaran yang diberikan oleh Panitia Pemilu HMIF 2021.</li>
											<li>Lembar dukungan dalam bentuk Google Form (disediakan oleh panitia) yang berisi Nama, NIM, serta melampirkan foto KTM dan foto tanda tangan. Lembar dukungan berisi minimal 85 orang anggota HMIF dari angkatan 2019, 50 orang anggota HMIF dari angkatan 2018, dan 20 orang anggota HMIF dari angkatan 2017 dan angkatan sebelumnya. Foto KTM dan tanda tangan harus dapat terlihat dengan jelas. </li>
											<li>Surat keterangan sehat jasmani dari lembaga kesehatan terdekat (jarak tempat tinggal dengan lembaga ≤ 5 km) dan terpercaya (ada kop surat, cap dokter, atau sejenisnya). Jika salah satu syarat tidak dapat terpenuhi, calon wajib memberitahu Panitia Pemilu untuk tata cara lebih lanjut.</li>
											<li>Surat persetujuan untuk mencalonkan diri dari orang tua/wali.</li>
											<li><i>Curriculum Vitae</i> dengan isi minimal data pribadi, riwayat pendidikan, pengalaman berorganisasi, dan prestasi.</li>
											<li>Pas foto berwarna terbaru (terhitung setelah menjadi mahasiswa ITB) ukuran 3x4 dengan spesifikasi wajah tidak tertutup dan berjahim. </li>
											<li>Foto/scan KTM dan <i>soft file</i> KSM Semester II 2020/2021.</li>
											<li>Transkrip akademik resmi selama masa pendidikan di ITB (sampai semester I 2020/2021).</li>
											<li>Surat kontrak bakal calon ketua HMIF yang diberikan oleh Panitia Pemilu HMIF 2021. Isi dari surat kontrak berupa:</li>
											<ol type="1">
												<li>Bersedia mengikuti segala rangkaian acara Pemilu HMIF 2021 yang diselenggarakan oleh Panitia Pemilu HMIF 2021.</li>
												<li>Bersedia untuk melepas jabatan yang sedang dipegang dalam lingkup KM ITB apabila terpilih menjadi ketua HMIF.</li>
												<li>Bersedia patuh terhadap aturan yang telah dibuat Panitia Pemilu HMIF 2021.</li>
												<li>Bersedia menerima sanksi jika melakukan pelanggaran peraturan Pemilu HMIF 2021.</li>
												<li>Tanda tangan basah di atas materai Rp6.000,00 dengan pihak Panitia Pemilu HMIF 2021.</li>
											</ol>
											<li>Lembar kendali media sosial yang digunakan untuk kampanye.</li>
											<li>Surat izin untuk mencalonkan diri dari lembaga terkait bila sedang memegang jabatan struktural apapun di kepanitiaan atau organisasi lain dalam lingkup KM ITB.</li>
											<li>Surat keterangan bebas dari sanksi akademik.</li>
											<li>Satu buah esai tentang alasan mencalonkan diri (minimal 250 kata) dengan bukti yang menunjukkan bahwa esai telah dipublikasikan. Teknis publikasi akan dijelaskan lebih lanjut oleh Panitia Pemilu HMIF 2021. </li>
										</ol>
										<li>Untuk calon Senator HMIF</li>
										<ol type="i">
											<li>Formulir pendaftaran yang diberikan oleh Panitia Pemilu HMIF 2021.</li>
											<li>Lembar dukungan dalam bentuk Google Form (disediakan panitia) yang berisi Nama, NIM, serta melampirkan foto KTM dan foto tanda tangan. Lembar dukungan berisi minimal 85 orang anggota HMIF dari angkatan 2019, 50 orang anggota HMIF dari angkatan 2018, dan 20 orang anggota HMIF dari angkatan 2017 dan angkatan sebelumnya. Foto KTM dan tanda tangan harus dapat terlihat dengan jelas.</li>
											<li>Surat keterangan sehat jasmani dari lembaga kesehatan terdekat (jarak tempat tinggal dengan lembaga ≤ 5 km) dan terpercaya (ada kop surat, cap dokter, atau sejenisnya). Jika salah satu syarat tidak dapat terpenuhi, calon wajib memberitahu Panitia Pemilu untuk tata cara lebih lanjut.</li>
											<li>Surat persetujuan untuk mencalonkan diri dari orang tua/wali.</li>
											<li><i>Curriculum Vitae</i> dengan isi minimal data pribadi, riwayat pendidikan, pengalaman berorganisasi, dan prestasi.</li>
											<li>Pas foto berwarna terbaru (terhitung setelah menjadi mahasiswa ITB) dengan ukuran 3x4 dengan spesifikasi wajah tidak tertutup dan berjahim.</li>
											<li>Foto/scan KTM dan <i>soft file</i> KSM Semester II 2020/2021.</li>
											<li>Transkrip akademik resmi selama masa pendidikan di ITB (sampai semester I 2020/2021).</li>
											<li>Surat kontrak bakal calon senator HMIF yang diberikan oleh Panitia Pemilu HMIF 2021. Isi dari surat kontrak berupa:</li>
											<ol type="1">
												<li>Bersedia mengikuti segala rangkaian acara Pemilu HMIF 2021 yang diselenggarakan oleh Panitia Pemilu HMIF 2021.</li>
												<li>Bersedia untuk melepas jabatan yang sedang dipegang dalam lingkup KM ITB apabila terpilih menjadi ketua HMIF.</li>
												<li>Bersedia patuh terhadap aturan yang telah dibuat Panitia Pemilu HMIF 2021.</li>
												<li>Bersedia menerima sanksi jika melakukan pelanggaran peraturan Pemilu HMIF 2021.</li>
												<li>Tanda tangan basah di atas materai Rp6.000,00 dengan pihak Panitia Pemilu HMIF 2021.</li>
											</ol>
											<li>Lembar kendali media sosial yang digunakan untuk kampanye.</li>
											<li>Surat izin untuk mencalonkan diri dari lembaga terkait bila sedang memegang jabatan struktural apapun di kepanitiaan atau organisasi lain dalam lingkup KM ITB.</li>
											<li>Surat keterangan bebas dari sanksi akademik.</li>
											<li>Satu buah esai tentang alasan mencalonkan diri (minimal 250 kata) dengan bukti yang menunjukkan bahwa esai telah dipublikasikan. Teknis publikasi akan dijelaskan lebih lanjut oleh Panitia Pemilu HMIF 2021. </li>
										</ol>
									</ol>
									<li>Dikenakan <i>Commitment Fee</i> senilai Rp 100.000 yang akan dikembalikan saat pendaftar mengembalikan berkas. Pilihan metode pembayaran akan diberitahu lebih lanjut oleh Panitia Pemilu HMIF 2021.</li>
									<li>Promotor tidak boleh ditambah atau dikurangi atau berubah setelah pendaftaran.</li>
									<li>Tim sukses boleh ditambahkan selama periode pemilu (hingga ketua dan senator HMIF terpilih) dengan terlebih dahulu menginformasikan kepada Panitia Pemilu HMIF 2021.</li>
									<li>Jumlah tim sukses yang terdaftar tidak boleh berkurang, kecuali atas permintaan dari calon itu sendiri, yang kemudian akan dipertimbangkan oleh Panitia Pemilu HMIF 2021.</li>
								</ol>
							  </b-card-text>
        	    		</b-card-body>
					</b-card>
        	    </b-collapse>
        	    

        		<b-button block v-b-toggle.accordion-2 variant="outline-warning" class="title">
					<h2>Bagian II</h2> 
					<h2 class="laptop">&nbsp:&nbsp Pengembalian Berkas, Verifikasi, dan Pengumuman Calon Terpilih</h2>
					<span class="when-open">
						<img src="@/public/images/icon-triangle-down.png" class="icon-triangle">
					</span>
					<span class="when-closed">
						<img src="@/public/images/icon-triangle-right.png" class="icon-triangle">
					</span>
				</b-button>
        	    
        	    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        	    	<b-card no-body class="mb-1">
						<b-card-body>						
        	      			<b-card-text class="text">
								<h2 class="mobile">Pengembalian Berkas, Verifikasi, dan Pengumuman Calon Terpilih</h2>
								<ol type="1">
									<li>Pengembalian berkas dilakukan secara daring.</li>
									<li>Waktu dan <i>platform</i> pengembalian berkas akan ditentukan dan diumumkan oleh Panitia Pemilu HMIF 2021. Berkas dikembalikan oleh bakal calon ketua himpunan/bakal calon senator dan tidak dapat diwakilkan.</li>
									<li>Apabila jumlah dukungan anggota HMIF yang telah diverifikasi oleh Panitia Pemilu HMIF 2021 tidak memenuhi jumlah minimal tetapi berkas pendaftaran sudah lengkap, maka bakal calon akan tetap diloloskan menjadi calon dengan syarat calon harus memenuhi angka minimal dukungan dengan batas waktu dua hari dari waktu diumumkannya calon yang lolos verifikasi dan dengan mekanisme yang akan diberitahukan kemudian oleh Panitia Pemilu HMIF 2021. Apabila setelah dua hari jumlah dukungan anggota HMIF masih belum mencapai angka minimal, maka calon akan dianggap mengundurkan diri.</li>
									<li>Waktu pengumuman hasil verifikasi akan diumumkan oleh Panitia Pemilu HMIF 2021.</li>
									<li>Waktu pengumuman calon terpilih akan diumumkan oleh Panitia Pemilu HMIF 2021.</li>
								</ol>
							</b-card-text>
        	    		</b-card-body>
					</b-card>
        	    </b-collapse>
        	    

        	       <b-button block v-b-toggle.accordion-3 variant="outline-warning" class="title">
					<h2>Bagian III</h2>
					<h2 class="laptop">&nbsp:&nbsp Kampanye</h2>
					<span class="when-open">
						<img src="@/public/images/icon-triangle-down.png" class="icon-triangle">
					</span>
					<span class="when-closed">
						<img src="@/public/images/icon-triangle-right.png" class="icon-triangle">
					</span>	
				</b-button>
        	    
        	    <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
					<b-card no-body class="mb-1">
        	    		<b-card-body>
        	      			<b-card-text class="text">
								<h2 class="mobile">Kampanye</h2>
								<ol type="1">
									<li>Seluruh kegiatan kampanye dilakukan secara daring.</li>
									<li>Kampanye dapat dilakukan sejak nama calon diumumkan hingga sebelum masa reses.</li>
									<li>Ketentuan pelanggaran kampanye secara umum adalah sebagai berikut:</li>
									<ol type="a">
										<li>Jika promotor dan/atau tim sukses terbukti melakukan pelanggaran, maka pelanggarannya akan menjadi tanggung jawab dari calon yang didukungnya.</li>
										<li>Promotor dan/atau tim sukses wajib untuk memenuhi panggilan klarifikasi jika terjadi pelanggaran yang berkaitan dengan calon yang didukungnya.</li>
									</ol>
									<li>Ketentuan kampanye melalui media sosial:</li>
									<ol type="a">
										<li>Konten kampanye adalah konten yang berisi hal-hal yang bertujuan untuk mendapatkan dukungan untuk salah satu calon.</li>
										<li>Kampanye dilakukan oleh calon, promotor, atau tim suksesnya. Anggota yang tidak menjadi calon, promotor, atau tim sukses tidak diperbolehkan membuat dan mempublikasikan konten kampanye. </li>
										<li>Media publikasi hanya diperbolehkan melalui media sosial. Publikasi hanya boleh di-<i>post</i> pada media sosial dengan fitur yang memungkinkan <i>post</i> tersebut dihapus. Contohnya: timeline LINE, <i>post</i> Instagram, dan sebagainya.</li>
										<li>Konten publikasi minimal berisi informasi mengenai hal-hal yang akan dibawa oleh calon tersebut di masa jabatannya. Contohnya: visi, misi, FAQ, dan lain-lain. Hal-hal mengenai isi media publikasi dapat didiskusikan dengan Panitia Pemilu HMIF 2021.</li>
										<li>Calon, promotor, atau tim sukses diwajibkan melaporkan pengeluaran keuangan untuk kepentingan kampanye kepada Sekretaris Bendahara Pemilu HMIF 2021 disertai bukti pembayaran setiap hari pengeluarannya dimulai sejak calon dinyatakan telah terverifikasi oleh Panitia Pemilu HMIF 2021. Panitia Pemilu HMIF 2021 berhak untuk mempublikasikan laporan pengeluaran keuangan tersebut untuk diketahui oleh Anggota HMIF. Jika tanggal pelaporan dan tanggal di bukti transaksi tidak sama maka termasuk ke dalam pelanggaran ringan.</li>
										<li>Dana kampanye yang diizinkan per calon ​maksimal Rp ​100.000.</li>
										<li>Calon, promotor, atau tim sukses diwajibkan melaporkan media publikasi yang digunakan kepada Panitia Pemilu HMIF 2021 melalui lembar kendali untuk setiap publikasi yang akan dilakukan.</li>
										<li>Setiap konten kampanye yang akan dipublikasikan melalui media sosial wajib dilaporkan dan harus mendapat persetujuan dari Komisi Disiplin Pemilu HMIF 2021. Mekanisme pelaporan dan permintaan persetujuan akan dilakukan dengan mengirimkan konten yang akan dipublikasikan di media sosial ke OA Pemilu HMIF 2021. <i>Post</i> tersebut nantinya akan diverifikasi oleh Komisi Disiplin Pemilu HMIF 2021 maksimal 1x24 jam sesudah mengirimkan <i>post</i> ke OA Pemilu HMIF 2021.</li>
										<li>Setiap media publikasi berupa video wajib dilaporkan dan harus mendapat persetujuan dari Panitia Pemilu HMIF 2021 dalam bentuk <i>clip</i> logo Pemilu HMIF. Mekanisme pelaporan dan permintaan persetujuan dilakukan dengan cara melaporkan video tersebut ke OA Pemilu HMIF 2021 dan melakukan upload ke <i>drive</i> yang sudah disediakan oleh Panitia Pemilu HMIF. Video tersebut nantinya akan diverifikasi dalam waktu 1x24 jam sesudah pelaporan.</li>
										<li>Kasus-kasus yang tidak sesuai dengan peraturan-peraturan di atas akan dikenakan pelanggaran. Jenis pelanggarannya akan ditentukan kemudian oleh Panitia Pemilu HMIF 2021.</li>
									</ol>
									<li>Ketentuan kampanye terfasilitasi berupa <i>hearing</i>:</li>
									<ol type="a">
										<li>Kampanye melalui <i>hearing</i> dilakukan sendiri oleh calon. Jika calon berhalangan hadir dengan alasan yang dapat diterima Panitia Pemilu HMIF 2021, salah satu promotor dapat menggantikan calon. Jika tidak dipenuhi, calon akan dikenakan pelanggaran berat. Bila calon tidak menghadiri <i>hearing</i> dengan alasan yang tidak diterima Panitia Pemilu HMIF 2021, sesi calon berbicara akan digantikan oleh promotor tapi tetap dianggap melakukan pelanggaran sedang.</li> 
										<li>Alasan yang dapat diterima:</li>											
										<ol type="i">
											<li>Bertambah atau berkurangnya anggota keluarga dekat (maksimal sampai sepupu satu kakek / nenek).</li>
											<li>Sakit yang membuat tidak bisa bangun.</li>
											<li>Acara keagamaan.</li>
											<li>Alasan-alasan lain yang akan dipertimbangkan lebih lanjut oleh Panitia Pemilu HMIF 2021.</li>
										</ol>
										<li>Waktu dan <i>platform</i> <i>hearing</i> akan ditentukan dan diumumkan oleh Panitia Pemilu HMIF 2020.</li>
										<li>Saat diadakan <i>hearing</i>, calon diwajibkan membuat selebaran dalam bentuk <i>soft file</i> untuk dibagikan kepada seluruh anggota yang menghadiri forum <i>hearing</i>, dengan disahkan terlebih dahulu oleh Panitia Pemilu HMIF 2021. Selebaran akan didistribusikan menggunakan tautan yang dibuat oleh calon. Spesifikasi selebaran akan diberitahukan lebih lanjut oleh Panitia Pemilu HMIF 2021.</li>
										<li>Calon, promotor, dan tim sukses diwajibkan untuk mengenakan jaket himpunan selama <i>hearing</i> berlangsung.</li>
										<li>Selain selebaran yang telah disebutkan, masing-masing calon diperbolehkan untuk membagikan media kampanye lain yang telah disahkan oleh Panitia Pemilu HMIF 2021.</li>
										<li><i>Hearing</i> calon ketua HMIF dan calon senator HMIF diadakan dalam sesi <i>hearing</i> yang telah disediakan panitia.</li>
										<li><i>Hearing</i> calon ketua dan calon senator HMIF wajib dihadiri oleh minimal 1 orang promotor dan minimal 5 orang tim sukses selama <i>hearing</i> berlangsung. </li>
										<li><i>Hearing</i> calon ketua dan calon senator HMIF dapat berlangsung jika kuorum <i>hearing</i> telah terpenuhi. Kuorum <i>hearing</i> adalah ⅓ (satu pertiga) dari kuorum setiap angkatan. Kuorum angkatan 2019 adalah 162 orang anggota angkatan 2019, kuorum angkatan 2018 orang 95 anggota angkatan 2018, dan kuorum angkatan 2017 dan angkatan sebelumnya adalah 45 orang anggota angkatan 2017 dan angkatan sebelumnya.</li>
										<li>Kuorum berjalan yang ditentukan adalah setengah dari jumlah kuorum yang telah diberikan. Kuorum berjalan didefinisikan sebagai jumlah anggota minimal yang harus ada setelah <i>hearing</i> dimulai. Jika kuorum berjalan tidak terpenuhi, <i>hearing</i> akan dihentikan sementara (maksimal 10 menit) sebelum dilanjutkan. Jika kuorum berjalan tidak dapat terpenuhi dalam batas waktu tersebut, <i>hearing</i> dihentikan.</li>
										<li>Jika <i>hearing</i> calon ketua HMIF atau calon senator HMIF pada hari tertentu dibatalkan, tidak boleh ada <i>hearing</i> yang difasilitasi oleh Panitia Pemilu HMIF 2021 pada hari yang sama.</li>
										<li>Jika <i>hearing</i> calon ketua HMIF atau calon senator HMIF pada hari tertentu dibatalkan karena tidak terpenuhinya kuorum, maka seluruh calon ketua HMIF dan calon senator HMIF akan dikenakan pelanggaran sedang.</li>
										<li>Calon yang terlambat datang <i>hearing</i> tanpa memberitahu panitia maksimal 1 jam sebelum waktu <i>hearing</i> akan dikenakan pelanggaran sedang.</li>
									</ol>
									<li>Ketentuan kampanye terfasilitasi melalui OA Pemilu HMIF:</li>
									<ol type="a">
										<li><i>Official Account</i> (OA) dari Pemilu HMIF 2021 akan dijadikan media kampanye yang berisi informasi pemilu secara umum dari Panitia Pemilu HMIF 2021.</li>
										<li>OA Pemilu juga berupa tempat bagi anggota untuk bertanya kepada para calon ketua HMIF dan calon senator HMIF.</li>
										<li>Media ini merupakan satu-satunya media digital yang resmi difasilitasi oleh Panitia Pemilu HMIF 2021 untuk interaksi tanya jawab calon ketua himpunan atau calon senator dengan anggota HMIF.</li>
										<li>Mekanisme dari interaksi adalah sebagai berikut,</li>
										<ol type="i">
											<li>Anggota HMIF diperbolehkan memberikan pertanyaan kepada para calon selama masa kampanye.</li>
											<li>Semua pertanyaan yang diajukan melalui media tersebut nantinya akan diverifikasi oleh Panitia Pemilu HMIF 2021 untuk kemudian dilemparkan ke calon terkait.</li>
											<li>Calon nantinya wajib untuk menjawab pertanyaan tersebut dalam waktu maksimal 24 jam setelah pertanyaan diberikan ke calon dan wajib mengirimkan jawabannya melalui OA Pemilu HMIF. </li>
											<li>Seluruh jawaban pertanyaan dari anggota nantinya akan di-<i>publish</i> pada waktu yang ditentukan oleh Panitia Pemilu HMIF 2021.</li>
										</ol>
										<li>Pertanyaan harus berhubungan dengan apa yang akan dibawa oleh calon (misalnya program kerja, visi misi, inovasi, dan sebagainya).</li>
									</ol>
									<li>Tidak menutup kemungkinan adanya kampanye terfasilitasi yang lainnya. Hal ini akan diberitahukan lebih lanjut oleh Panitia Pemilu HMIF 2021.</li>
								</ol>
							</b-card-text>
        	    		</b-card-body>
					</b-card>
        	    </b-collapse>
        	    

        	    <b-button block v-b-toggle.accordion-4 variant="outline-warning" class="title">
					<h2>Bagian IV</h2>
					<h2 class="laptop">&nbsp:&nbsp Debat dan Uji Publik</h2>
					<span class="when-open">
						<img src="@/public/images/icon-triangle-down.png" class="icon-triangle">
					</span>
					<span class="when-closed">
						<img src="@/public/images/icon-triangle-right.png" class="icon-triangle">
					</span>
				</b-button>
				
        	    <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        	    	<b-card no-body class="mb-1">
						<b-card-body>
        	      			<b-card-text class="text">
								<h2 class="mobile">Debat dan Uji Publik</h2>
								<ol type="1">
									<li>Debat dan uji publik dilakukan secara daring.</li>
									<li>Debat dan uji publik dilakukan sendiri oleh calon. Jika calon berhalangan hadir dengan alasan yang tidak dapat diterima Panitia Pemilu HMIF 2021, calon akan dikenakan pelanggaran berat. Bila calon tidak menghadiri debat dan uji publik dengan alasan yang dapat diterima Panitia Pemilu HMIF 2021, debat tetap dilaksanakan dengan tidak melibatkan calon yang berhalangan hadir.</li>
									<li>Alasan yang dapat diterima:</li>
									<ol type="a">
										<li>Bertambah atau berkurangnya anggota keluarga dekat (maksimal sampai sepupu satu kakek / nenek).</li>
										<li>Sakit yang membuat tidak bisa bangun.</li>
										<li>Acara keagamaan.</li>
										<li>Alasan-alasan lain yang akan dipertimbangkan lebih lanjut oleh Panitia Pemilu HMIF 2021.</li>
									</ol>
									<li>Waktu dan <i>platform</i> debat dan uji publik akan ditentukan dan diumumkan oleh Panitia Pemilu HMIF 2021.</li>
									<li>Calon, promotor, dan tim sukses diwajibkan untuk mengenakan jaket himpunan selama debat dan uji publik berlangsung.</li>
									<li>Calon, promotor, dan tim sukses dilarang membagikan konten kampanye selama debat dan uji publik berlangsung. Jika ada calon yang terbukti membagikan konten kampanye saat debat akan dikenakan pelanggaran sedang.</li>
									<li>Debat dan uji publik calon ketua HMIF dan calon senator HMIF diadakan dalam sesi yang telah disediakan panitia.</li>
									<li>Debat dan uji publik calon ketua dan calon senator HMIF wajib dihadiri oleh minimal 1 orang promotor dan minimal 5 orang tim sukses selama <i>hearing</i> berlangsung. </li>
									<li>Debat dan uji publik calon ketua dan calon senator HMIF dapat berlangsung jika kuorum debat dan uji publik telah terpenuhi. Kuorum debat dan uji publik adalah ⅓ (satu pertiga) dari kuorum setiap angkatan. Kuorum angkatan 2019 adalah 162 orang anggota angkatan 2019, kuorum angkatan 2018 orang 95 anggota angkatan 2018, dan kuorum angkatan 2017 dan angkatan sebelumnya adalah 45 orang anggota angkatan 2017 dan angkatan sebelumnya.</li>
									<li>Kuorum berjalan yang ditentukan adalah setengah dari jumlah kuorum yang telah diberikan. Kuorum berjalan didefinisikan sebagai jumlah anggota minimal yang harus ada setelah debat dan uji publik dimulai. Jika kuorum berjalan tidak terpenuhi, debat dan uji publik akan dihentikan sementara (maksimal 10 menit) sebelum dilanjutkan. Jika kuorum berjalan tidak dapat terpenuhi dalam batas waktu tersebut, debat dan uji publik dihentikan.</li>
									<li>Jika debat dan uji publik calon ketua HMIF atau calon senator HMIF pada hari tertentu dibatalkan, tidak boleh ada debat dan uji publik yang difasilitasi oleh Panitia Pemilu HMIF 2021 pada hari yang sama.</li>
									<li>Jika debat dan uji publik calon ketua HMIF atau calon senator HMIF pada hari tertentu dibatalkan karena tidak terpenuhinya kuorum, maka seluruh calon ketua HMIF dan calon senator HMIF akan dikenakan pelanggaran sedang.</li>
									<li>Calon yang terlambat datang debat dan uji publik tanpa memberitahu panitia maksimal 1 jam sebelum waktu <i>hearing</i> akan dikenakan pelanggaran sedang.</li>
								</ol>
							</b-card-text>
        	    		</b-card-body>
					</b-card>
        	    </b-collapse>
        	    

        	       <b-button block v-b-toggle.accordion-5 variant="outline-warning" class="title">
					<h2>Bagian V</h2>
					<h2 class="laptop">&nbsp:&nbsp Masa Reses</h2>
					<span class="when-open">
						<img src="@/public/images/icon-triangle-down.png" class="icon-triangle">
					</span>
					<span class="when-closed">
						<img src="@/public/images/icon-triangle-right.png" class="icon-triangle">
					</span>
				</b-button>
        	    
        	    <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
					<b-card no-body class="mb-1">
        	    		<b-card-body>
        	      			<b-card-text class="text">
								<h2 class="mobile">Masa Reses</h2>
								<ol type="1">
									<li>Masa reses dilakukan 3 hari sebelum hari pemungutan suara dilaksanakan.</li>
									<li>Pukul 00.01 pada masa reses dimulai, publikasi calon telah bersih.</li>
									<li>Bersih didefinisikan sebagai tidak adanya lagi konten publikasi, seperti tidak adanya lagi postingan Line, post Instagram, dan lain-lain. Namun, informasi tentang program kerja dan visi misi dapat tetap dilihat dalam sebuah ​<i>drive</i> ​yang akan dibuat dan disebar oleh Panitia Pemilu HMIF 2021.</li>
									<li>Pada batas waktu tersebut, seluruh publikasi akan diperiksa oleh Panitia Pemilu HMIF 2021. Jika terdapat ketidak-bersihan, maka calon dikenakan pelanggaran sedang dan publikasi tersebut harus dibersihkan maksimal 1 jam setelah diberitahukan. Apabila masih tidak dipenuhi, calon akan dikenakan pelanggaran berat.</li>
								</ol>
							</b-card-text>
        	    		</b-card-body>
					</b-card>
        	    </b-collapse>

        	    
        	    <b-button block v-b-toggle.accordion-6 variant="outline-warning" class="title">
					<h2>Bagian VI</h2>
					<h2 class="laptop">&nbsp:&nbsp Pemungutan Suara</h2>
					<span class="when-open">
						<img src="@/public/images/icon-triangle-down.png" class="icon-triangle">
					</span>
					<span class="when-closed">
						<img src="@/public/images/icon-triangle-right.png" class="icon-triangle">
					</span>
				</b-button>
        	    
        	    <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
					<b-card no-body class="mb-1">
        	    		<b-card-body>
        	      			<b-card-text class="text">
								<h2 class="mobile">Pemungutan Suara</h2>
								<ol type="1">
									<li>Proses pemungutan suara dilakukan secara daring.</li>
									<li>Waktu pemungutan suara akan ditentukan dan diumumkan oleh Panitia Pemilu HMIF 2021.</li>
									<li>Masa pemungutan suara akan dilaksanakan selama 3 hari.</li>
									<li>Sistem pemungutan suara pada Pemilu HMIF 2021 akan dilakukan dengan metode <i>voting</i> melalui website yang dibuat Panitia Pemilu HMIF 2021. Mekanisme <i>voting</i> melalui website akan diumumkan oleh Panitia Pemilu HMIF 2021.</li>
									<li>Tata cara pemungutan suara secara rinci akan akan dijelaskan dan diumumkan lebih lanjut oleh Panitia Pemilu HMIF 2021.</li>
								</ol>
							</b-card-text>
        	    		</b-card-body>
					</b-card>
        	    </b-collapse>
        	    

        	    <b-button block v-b-toggle.accordion-7 variant="outline-warning" class="title">
					<h2>Bagian VII</h2>
					<h2 class="laptop">&nbsp:&nbsp Perhitungan Suara</h2>
					<span class="when-open">
						<img src="@/public/images/icon-triangle-down.png" class="icon-triangle">
					</span>
					<span class="when-closed">
						<img src="@/public/images/icon-triangle-right.png" class="icon-triangle">
					</span>
				</b-button>
        	    	
        	    <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
					<b-card no-body class="mb-1">
        	    		<b-card-body>
        	      			<b-card-text class="text">
								<h2 class="mobile">Perhitungan Suara</h2>
								<ol type="1">
									<li>Waktu penghitungan suara akan ditentukan dan diumumkan oleh Panitia Pemilu HMIF 2021.</li>
									<li>Tata cara penghitungan suara adalah sebagai berikut:</li>
									<ol type="a">
										<li>Penghitungan suara calon ketua akan dilakukan apabila jumlah total surat suara yang diterima Panitia Pemilu HMIF 2021 minimal berjumlah ¾ (tiga perempat) dari total DPT calon ketua HMIF.</li>
										<li>Penghitungan suara calon senator akan dilakukan apabila jumlah total surat suara yang diterima Panitia Pemilu HMIF 2021 minimal ¾ (tiga perempat) dari total DPT calon senator HMIF.</li>
										<li>Jika jumlah tersebut tidak tercapai, maka proses pemungutan suara akan diperpanjang atas persetujuan anggota. Apabila setelah diperpanjang jumlah tersebut masih belum tercapai, maka akan dikembalikan ke DPP.</li>
									</ol>
								</ol>
							</b-card-text>
        	    		</b-card-body>
					</b-card>
        	    </b-collapse>
        	    

        	    <b-button block v-b-toggle.accordion-8 variant="outline-warning" class="title">
					<h2>Bagian VIII</h2>
					<h2 class="laptop">&nbsp:&nbsp Pelanggaran</h2>
					<span class="when-open">
						<img src="@/public/images/icon-triangle-down.png" class="icon-triangle">
					</span>
					<span class="when-closed">
						<img src="@/public/images/icon-triangle-right.png" class="icon-triangle">
					</span>
				</b-button>
        	     	
        	    <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
					<b-card no-body class="mb-1">
        	    		<b-card-body>
        	      			<b-card-text class="text">
								<h2 class="mobile">Pelanggaran</h2>
								<ol type="1">
									<li>Jenis Pelanggaran</li>
									<ol type="a">
										<li>Ringan</li>
										<ol type="i">
											<li>Penyebaran publikasi di luar media yang telah ditentukan. Pelanggaran dihitung sesuai jumlah kejadian yang terjadi.</li>
											<li>Tidak menjawab dan/atau terlambat menjawab pertanyaan anggota di kampanye terfasilitasi melalui OA Pemilu HMIF.</li>
											<li>Tanggal pelaporan dan tanggal bukti di transaksi untuk kepentingan kampanye berbeda.</li>
											<li>Jumlah dana yang dilaporkan untuk kepentingan kampanye berbeda dengan jumlah pada transaksi sebenarnya.</li>
										</ol>
										<li>Sedang</li>
										<ol type="i">
											<li>Calon, tim sukses, ataupun promotor melakukan ​<i><b>Negative Campaign</b></i> kepada calon lain, disesuaikan dengan pertimbangan Komisi Disiplin Panitia Pemilu HMIF 2021. Definisi <i>​Negative Campaign​</i> adalah fakta tentang kekurangan, prestasi rapor merah tentang pekerjaan dari calon lain.</li>
											<li>Tidak membuat selebaran untuk <i>hearing</i>.</li>
											<li>Calon ketua HMIF dan/atau promotor terlambat datang <i>hearing</i>, debat, dan uji publik tanpa alasan yang dapat diterima oleh Panitia Pemilu HMIF 2021.</li>
											<li>Calon senator HMIF dan/atau promotor terlambat datang <i>hearing</i>, debat, dan uji publik tanpa alasan yang dapat diterima oleh Panitia Pemilu HMIF 2021.</li>
											<li>Jumlah tim sukses dari calon ketua HMIF atau calon senator HMIF yang berada di dalam ruangan selama <i>hearing</i>, debat, dan uji publik berlangsung kurang dari 5 orang.</li>
											<li>Konten kampanye masih terpampang di media sosial selama masa reses, pelanggaran dihitung sesuai jumlah konten kampanye yang belum dibersihkan.</li>
											<li>Calon, promotor, dan tim sukses menyebarkan konten kampanye saat debat dan uji publik berlangsung.</li>
											<li>Memasang publikasi tanpa pengesahan dari Panitia Pemilu HMIF 2021.</li>
											<li>Tidak ada promotor dari calon ketua atau senator HMIF yang menghadiri <i>hearing</i>, debat, dan uji publik.</li>
											<li>Calon terlambat datang <i>hearing</i>, debat, dan uji publik tanpa memberi tahu panitia maksimal 1 jam sebelum dimulai.</li>
											<li>Kuorum <i>hearing</i>, debat, dan uji publik tidak terpenuhi.</li>
											<li>Pengeluaran total untuk kampanye melebihi batas maksimal.</li>
										</ol>
										<li>Berat</li>
										<ol type="i">
											<li>Calon, tim sukses, ataupun promotor melakukan ​<i><b>Black Campaign</b></i> kepada calon lain, disesuaikan dengan pertimbangan Komisi Disiplin Panitia Pemilu HMIF 2021. Definisi ​<i>Black Campaign</i>​ adalah melakukan fitnah atau tuduhan yang tidak memiliki fakta dan dasar kepada calon lain.</li>
											<li>Calon ketua HMIF tidak menghadiri <i>hearing</i>, debat, dan uji publik Calon Ketua HMIF tanpa alasan yang dapat diterima sesuai poin 5.b Bagian III.</li>
											<li>Calon senator HMIF tidak menghadiri <i>hearing</i>, debat, dan uji publik Calon Senator HMIF tanpa alasan yang dapat diterima sesuai poin 5.b Bagian III. </li>
											<li>Calon ketua HMIF telah membentuk dan memublikasikan kandidat DE sebelum terpilih.</li>
											<li>Calon senator HMIF telah membentuk tim dan memublikasikan tim senatornya sebelum terpilih.</li>
											<li>Konten kampanye belum bersih setelah satu jam diberi peringatan pada masa reses.</li>
											<li>Calon dan bakal calon, tim sukses, ataupun promotor melakukan kampanye di luar waktu yang sudah ditentukan oleh Panitia Pemilu HMIF 2021.</li>
										</ol>
									</ol>
									<li>Calon akan didiskualifikasi jika poin yang dimiliki calon tersebut mencapai angka kurang dari atau sama dengan 0 dengan ketentuan sebagai berikut:</li>
									<ol type="a">
										<li>Setiap calon masing-masing memiliki 100 poin tepat setelah calon dinyatakan lolos verifikasi, kecuali calon yang melakukan pelanggaran saat menjadi bakal calon akan mendapat pengurangan poin sesuai pelanggaran yang dilakukan. </li>
										<li>Setiap pelanggaran ringan yang dilakukan oleh calon akan bernilai -15.</li>
										<li>Setiap pelanggaran sedang yang dilakukan oleh calon akan bernilai -25.</li>
										<li>Setiap pelanggaran berat yang dilakukan oleh calon akan bernilai -50.</li>
										<li>Melakukan tindakan kriminal akan bernilai -100 (diskualifikasi).</li>
									</ol>
									<li>Tata cara penindakan pelanggaran</li>
									<ol type="a">
										<li>Pelanggaran akan ditindak dengan klarifikasi kejadian langsung maupun laporan dari saksi tertentu.</li>
										<li>Setiap pelanggaran peraturan pemilu yang tidak dicantumkan di atas, akan dikaji terlebih dahulu oleh Panitia Pemilu HMIF 2021.</li>
										<li>Mekanisme Pelaporan Pelanggaran
										<br>Bagi siapapun yang melihat pelanggaran aturan pemilu yang dilakukan oleh calon dan/atau timnya, berhak melaporkan pelanggaran tersebut kepada Komisi Disiplin Pemilu HMIF 2021 yang ditunjuk berikut:
										<br>
										<br>Nama	: Rayhan Alghifari Fauzta
										<br>NIM : 13519039
										<br>	
										<br>Pelaporan bisa melalui salah satu media pelaporan berikut: 
										<br>	
										<br>Email	: 13519039@std.stei.itb.ac.id
										<br>Line	: rayhanalghifari
										<br>
										<br>Identitas pelapor harus jelas (minimal NIM) namun akan dirahasiakan, kecuali dengan permintaan dari pelapor. Setiap terjadi pelaporan, Komisi Disiplin Pemilu HMIF 2021 akan melakukan klarifikasi dengan calon yang tertuduh. Jika calon terbukti melanggar, maka akan diberikan sanksi sesuai pelanggaran yang dilakukan. Batas waktu pelaporan pelanggaran adalah tepat sebelum masa perhitungan suara.</li>
									</ol>
								</ol>
							</b-card-text>
        	    		</b-card-body>
					</b-card>
        	    </b-collapse>
        	    
        	</div>
		</div>
    </div>
</template>

<script>
export default {
}

</script>
<style lang="scss" scoped>

	/* Judul Utama */
	h1{
	    font-family: Roboto;
		font-size: 40px;
    	line-height: 44px;
    	font-weight: 700;
    	text-transform: uppercase;
	    text-align: center;
		padding-bottom: 20px;
		
	}

	/* Subjudul per Bab */
	.title{
		h2{
			margin-top: 10px;
	    	font-family: Roboto;
	    	line-height: 20px;
	    	text-align: left;
			float: left;
	    	color: #000000;
		}	

		border-radius: 1rem;
		margin-bottom: 6px;
	}

	/* Responsive judul Bab */
	@media only screen and (max-width: 767px){
		.title{
			h2{
				font-size: 18px;
			}
		}
		.laptop{
			display: none;
		}
	}
	@media only screen and (min-width: 768px){
		.title{
			h2{
				font-size: 18px;
			}
		}
		.mobile{
			display: none;
		}
	}
	@media only screen and (min-width: 1024px){
		.title{
			h2{
				font-size: 24px;
			}
		}
		.mobile{
			display: none;
		}
	}

	/* Isi Bab */
	.text{
		h2{
			margin-top: 0;
			margin-bottom: 10px;
			text-align: left;
			font-size: 20px;
		}

	    font-family: Roboto;
	    font-size: 16px;
	    line-height: 32px;
	    text-align: justify;
	    color: #000000;
	}

	/* Icon triangle */
	.icon-triangle{
		width: 40px;
		float: right;
	}

	/* Animation */
	.collapsed > .when-open,
	.not-collapsed > .when-closed {
  		display: none;
	}

	/* Theme color */
	.btn-outline-warning{
		color: #ffc801;
		border-color: #ffc801;
	}

	.btn-outline-warning:hover{
		background-color: #ffc801;
		border-color: #ffc801;
	}
</style>