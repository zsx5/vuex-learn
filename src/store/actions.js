export default  {
    aUpdateName(context, payload) {  //注意这个方法里的context是store
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('updateName', payload)
                resolve('hahahhh')
            }, 1000);
        })
    }
}