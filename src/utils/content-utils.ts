import { type CollectionEntry, getCollection } from "astro:content";

type CollectionName = "projects" | "achievements";

// Retrieve entries and sort them by publication date
async function getRawSortedEntries<T extends CollectionName>(
	collection: T,
): Promise<CollectionEntry<T>[]> {
	const allEntries = await getCollection(collection, ({ data }) =>
		import.meta.env.PROD ? data.draft !== true : true,
	);

	const sorted = allEntries.sort((a, b) => {
		const dateA = new Date(a.data.published);
		const dateB = new Date(b.data.published);
		return dateA > dateB ? -1 : 1;
	});
	return sorted;
}

function attachPrevNext<T extends CollectionEntry<CollectionName>>(
	sorted: T[],
) {
	for (let i = 1; i < sorted.length; i++) {
		sorted[i].data.nextSlug = sorted[i - 1].slug;
		sorted[i].data.nextTitle = sorted[i - 1].data.title;
	}
	for (let i = 0; i < sorted.length - 1; i++) {
		sorted[i].data.prevSlug = sorted[i + 1].slug;
		sorted[i].data.prevTitle = sorted[i + 1].data.title;
	}
}

async function getSortedCollection<T extends CollectionName>(collection: T) {
	const sorted = await getRawSortedEntries(collection);
	attachPrevNext(sorted);
	return sorted;
}

export async function getSortedProjects() {
	return getSortedCollection("projects");
}

export async function getSortedAchievements() {
	return getSortedCollection("achievements");
}

export type ProjectForList = {
	slug: string;
	data: CollectionEntry<"projects">["data"];
};
export async function getSortedProjectsList(): Promise<ProjectForList[]> {
	const sortedFullProjects = await getRawSortedEntries("projects");

	return sortedFullProjects.map((project) => ({
		slug: project.slug,
		data: project.data,
	}));
}

export type AchievementForList = {
	slug: string;
	data: CollectionEntry<"achievements">["data"];
};

export async function getSortedAchievementsList(): Promise<
	AchievementForList[]
> {
	const sortedFullAchievements = await getRawSortedEntries("achievements");

	return sortedFullAchievements.map((achievement) => ({
		slug: achievement.slug,
		data: achievement.data,
	}));
}
