{

    type frontendDeveloper = {
        skills: string[],
        designation1: "Frontend Developer"
    }
    type backendDeveloper = {
        skills: string[],
        designation2: "Backend Developer"
    }

    type fullstackDeveloper = frontendDeveloper | backendDeveloper;

    const fullstackDeveloper = {
        skills: ['HTML', 'CSS', 'NodeJS'],
        designation1: 'Frontend Developer',
    }
    console.log(fullstackDeveloper);


}