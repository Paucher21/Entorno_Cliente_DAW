function t3e1_fincurso() {
    const hoy = new Date();
    const finCurso = new Date(hoy.getFullYear(), 5, 24);
    
    if (hoy > finCurso) {
        finCurso.setFullYear(finCurso.getFullYear() + 1);
    }
    
    const diff = finCurso - hoy;
    const dias = Math.ceil(diff / (1000 * 60 * 60 * 24));
    alert(`Días hasta fin de curso: ${dias}`);
}