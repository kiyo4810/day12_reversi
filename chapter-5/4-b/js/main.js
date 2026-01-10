document.addEventListener('DOMContentLoaded', async function() {
    console.log('load開始');
    await appResource.load();
    console.log('load終了');
});
