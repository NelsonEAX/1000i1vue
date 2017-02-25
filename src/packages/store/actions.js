/**
 * Created by NelsonEAX on 14.02.2017.
 */
export default {
    setNewRoot(context, newRoot){
        context.commit('setNewRoot', {
            newRoot: newRoot
        })
    }
};