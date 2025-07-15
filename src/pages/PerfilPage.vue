<template>
    <section>
      <input type="number" v-model="quantidade" />
      <input type="date" v-model="dataMinima" />
      <input type="date" v-model="dataMaxima" />
      <input type="checkbox" v-model="naoRepetir" />
      <button @click="sortear()">Sortear</button>

      <pre>{{ sorteadas }}</pre>
    </section>
</template>
<script>
import galeryData from '@/assets/db/galeryData';
export default {
  name: 'PerfilPage',
  data() {
    return {
      galery: [],
      quantidade: 1,
      dataMinima: '2024-05-01',
      dataMaxima: '2024-05-20',
      naoRepetir: true,
      sorteadas: []
    };
  },
  created() {
    this.galery = galeryData.galery;
  },
  methods: {
    sortear() {
      const maxData = new Date(this.dataMaxima);
      const minData = new Date(this.dataMinima);

      let filtradas = this.galery.filter(foto => {
           
        const fotoData = new Date(foto.date);
      
        return fotoData >= minData && fotoData <= maxData;
      })
      
      if(filtradas.length === 0) {
        alert('Nenhuma foto encontrada nesse período');
        return;
      }

      let maxSorteio = this.naoRepetir ? filtradas.length : this.quantidade;

      let embaralhar = filtradas.sort(() => Math.random() - 0.5);

      this.sorteadas = embaralhar.slice(0, Math.min(this.quantidade, maxSorteio));
    }
  },
}
</script>
<style scoped></style>