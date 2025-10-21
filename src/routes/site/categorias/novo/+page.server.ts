import { fail, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const categoryName = data.get('categoryName') as string;
        
        console.log(`Recebido no servidor: ${categoryName}`);
        
        if (!categoryName || categoryName.trim().length < 3) {
            return fail(400, { 
                categoryName, 
                error: 'O nome da categoria deve ter pelo menos 3 caracteres.' 
            });
        }

        await new Promise(resolve => setTimeout(resolve, 1000)); 

        return { success: true, message: `Categoria "${categoryName}" salva com sucesso!` };
    }
};