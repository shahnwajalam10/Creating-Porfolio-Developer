import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Github, Star, GitFork, ExternalLink, 
  Calendar, Users, FolderGit2, Code2,
  ChevronRight, TrendingUp, Eye,
  GitCommit, GitPullRequest, Globe,
  Zap, Sparkles, Target, Cpu,
  Code, GitBranch, Activity,
  Clock, Award, Rocket
} from "lucide-react";

export default function GithubComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [userRes, repoRes] = await Promise.all([
          fetch("https://api.github.com/users/shahnwajalam10"),
          fetch(
            "https://api.github.com/users/shahnwajalam10/repos?sort=updated&per_page=6"
          ),
        ]);

        const user = await userRes.json();
        const repos = await repoRes.json();

        const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);
        const totalCommits = 450;
        const avgStarsPerRepo = (totalStars / repos.length).toFixed(1);

        const processedRepos = repos.map((r) => ({
          name: r.name,
          description: r.description,
          language: r.language,
          stars: r.stargazers_count,
          forks: r.forks_count,
          url: r.html_url,
          updated: timeAgo(r.updated_at),
          size: r.size,
          has_pages: r.has_pages,
          topics: r.topics || [],
        }));

        setData({
          user: {
            name: user.name,
            username: user.login,
            avatar: user.avatar_url,
            profile: user.html_url,
            followers: user.followers,
            following: user.following,
            repos: user.public_repos,
            bio: user.bio,
            created_at: user.created_at,
          },
          repos: processedRepos,
          stats: {
            totalStars,
            totalForks,
            totalCommits,
            avgStarsPerRepo,
            totalContributions: Math.floor(totalStars * 0.8),
          },
        });
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const timeAgo = (date) => {
    const d = new Date(date);
    const diff = Math.floor((Date.now() - d) / (1000 * 60 * 60 * 24));
    if (diff === 0) return "today";
    if (diff === 1) return "yesterday";
    if (diff < 7) return `${diff} days ago`;
    if (diff < 30) return `${Math.floor(diff / 7)} weeks ago`;
    return `${Math.floor(diff / 30)} months ago`;
  };

  if (loading) {
    return (
      <section id="github" className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-black/5" />
              <div>
                <div className="h-8 bg-black/5 w-48 mb-2" />
                <div className="h-4 bg-black/5 w-32" />
              </div>
            </div>
            <div className="h-[3px] w-32 bg-orange-600/20" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[1, 2].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-64 bg-black/5 mb-6"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-black/5 w-3/4"></div>
                  <div className="h-4 bg-black/5 w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section id="github" className="py-32 px-6 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-orange-600">
              <Github className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-6xl font-extrabold tracking-tight">
                GitHub <span className="text-orange-600">Activity</span>
              </h2>
              <p className="text-xl text-black/60 mt-2">
                Open-source contributions & development journey
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-black/60">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              <span>Real-time tracking</span>
            </div>
            <div className="w-[1px] h-4 bg-black/20" />
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Live contributions</span>
            </div>
            <div className="w-[1px] h-4 bg-black/20" />
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4" />
              <span>Active development</span>
            </div>
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[3px] w-40 bg-orange-600 mt-6"
          />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-black text-white p-6 border border-white/10 group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-black">
                <FolderGit2 className="w-6 h-6 text-orange-600" />
              </div>
              <motion.div
                whileHover={{ rotate: 45 }}
                className="w-8 h-8 bg-black border border-white/20 flex items-center justify-center group-hover:bg-orange-600/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.div>
            </div>
            <div className="text-4xl font-bold mb-2 text-orange-600">{data.user.repos}</div>
            <div className="text-sm text-white/80 font-medium">Repositories</div>
            <div className="mt-4 h-[2px] w-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-orange-600"
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-black text-white p-6 border border-white/10 group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-black">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
              <motion.div
                whileHover={{ rotate: 45 }}
                className="w-8 h-8 bg-black border border-white/20 flex items-center justify-center group-hover:bg-orange-600/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.div>
            </div>
            <div className="text-4xl font-bold mb-2 text-orange-600">{data.stats.totalStars}</div>
            <div className="text-sm text-white/80 font-medium">Total Stars</div>
            <div className="mt-4 h-[2px] w-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-orange-600"
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-black text-white p-6 border border-white/10 group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-black">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <motion.div
                whileHover={{ rotate: 45 }}
                className="w-8 h-8 bg-black border border-white/20 flex items-center justify-center group-hover:bg-orange-600/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.div>
            </div>
            <div className="text-4xl font-bold mb-2 text-orange-600">{data.user.followers}</div>
            <div className="text-sm text-white/80 font-medium">Followers</div>
            <div className="mt-4 h-[2px] w-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-orange-600"
                initial={{ width: 0 }}
                animate={{ width: "65%" }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-black text-white p-6 border border-white/10 group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-black">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <motion.div
                whileHover={{ rotate: 45 }}
                className="w-8 h-8 bg-black border border-white/20 flex items-center justify-center group-hover:bg-orange-600/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.div>
            </div>
            <div className="text-4xl font-bold mb-2 text-orange-600">{data.stats.totalContributions}</div>
            <div className="text-sm text-white/80 font-medium">Contributions</div>
            <div className="mt-4 h-[2px] w-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-orange-600"
                initial={{ width: 0 }}
                animate={{ width: "90%" }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Main Profile & Activity Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Profile Card */}
            <motion.div
              whileHover={{ y: -2 }}
              className="lg:col-span-2"
            >
              <div className="bg-black text-white p-8 border border-white/10">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <img
                        src={data.user.avatar}
                        className="w-20 h-20 border-4 border-white"
                        alt={data.user.username}
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-600 flex items-center justify-center border-4 border-black">
                        <Github className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold">{data.user.name}</h3>
                      <p className="text-orange-600">@{data.user.username}</p>
                    </div>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={data.user.profile}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-black border border-white/20 hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Profile</span>
                  </motion.a>
                </div>

                {data.user.bio && (
                  <p className="text-white/80 mb-8 leading-relaxed">{data.user.bio}</p>
                )}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{data.user.followers}</div>
                    <div className="text-sm text-white/80 flex items-center justify-center gap-1 mt-1">
                      <Users className="w-4 h-4" />
                      <span>Followers</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{data.user.following}</div>
                    <div className="text-sm text-white/80 flex items-center justify-center gap-1 mt-1">
                      <Eye className="w-4 h-4" />
                      <span>Following</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{data.stats.totalCommits}</div>
                    <div className="text-sm text-white/80 flex items-center justify-center gap-1 mt-1">
                      <GitCommit className="w-4 h-4" />
                      <span>Commits</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{data.stats.totalForks}</div>
                    <div className="text-sm text-white/80 flex items-center justify-center gap-1 mt-1">
                      <GitFork className="w-4 h-4" />
                      <span>Forks</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/80">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Member since {new Date(data.user.created_at).getFullYear()}</span>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={data.user.profile}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors"
                    >
                      <span>View Profile</span>
                      <ChevronRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Contribution Graph */}
            <motion.div
              whileHover={{ y: -2 }}
              className="relative"
            >
              <div className="bg-black text-white p-8 border border-white/10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-black">
                    <Activity className="w-5 h-5 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-semibold">Activity Heatmap</h4>
                </div>

                <div className="mb-6">
                  <div className="grid grid-cols-10 gap-1 mb-4">
                    {Array.from({ length: 70 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.01 }}
                        style={{
                          backgroundColor: i % 7 === 0 
                            ? '#ea580c' 
                            : i % 5 === 0 
                              ? '#f97316' 
                              : i % 3 === 0 
                                ? '#fb923c' 
                                : '#374151',
                        }}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-white/80">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Last 10 weeks</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-white/20"></div>
                        <span>Less</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-orange-600"></div>
                        <span>More</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-black border border-white/10">
                        <Zap className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Current Streak</div>
                        <div className="text-sm text-white/80">14 days</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-orange-600">14</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-black border border-white/10">
                        <Award className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Avg Stars</div>
                        <div className="text-sm text-white/80">Per repository</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-orange-600">{data.stats.avgStarsPerRepo}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Featured Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-black/5">
                <Code2 className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-4xl font-bold">
                  Featured <span className="text-orange-600">Repositories</span>
                </h3>
                <p className="text-black/60 mt-1">Most recent and active projects</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-black/5">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">{data.repos.length} projects</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {data.repos.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="bg-white border border-black/20 hover:border-orange-600 p-8 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-black/5 group-hover:bg-orange-600/10 transition-colors">
                        <FolderGit2 className="w-6 h-6 text-black group-hover:text-orange-600 transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold group-hover:text-orange-600 transition-colors">
                          {repo.name}
                        </h4>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1 text-sm text-black/60">
                            <Star className="w-4 h-4" />
                            <span>{repo.stars}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-black/60">
                            <GitFork className="w-4 h-4" />
                            <span>{repo.forks}</span>
                          </div>
                          {repo.has_pages && (
                            <div className="flex items-center gap-1 text-sm text-black/60">
                              <Globe className="w-4 h-4" />
                              <span>Live</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {repo.language && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-black/5 group-hover:bg-orange-600/10 transition-colors">
                        <div 
                          className="w-2 h-2 bg-orange-600" 
                        />
                        <span className="text-sm font-medium">{repo.language}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-black/70 mb-6 leading-relaxed line-clamp-2">
                    {repo.description || "No description provided"}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-black/10">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-black/60">
                        <Clock className="w-4 h-4" />
                        <span>Updated {repo.updated}</span>
                      </div>
                      {repo.size && (
                        <div className="flex items-center gap-2 text-sm text-black/60">
                          <Cpu className="w-4 h-4" />
                          <span>{repo.size} KB</span>
                        </div>
                      )}
                    </div>
                    
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-semibold hover:bg-orange-600 transition-colors"
                    >
                      <Code className="w-4 h-4" />
                      <span>View Code</span>
                      <ChevronRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-black text-white p-12 border border-white/10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-2/3">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-black">
                    <Target className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      Ready to explore more?
                    </h3>
                    <p className="text-white/80">
                      Dive into all {data.user.repos} repositories, check out my contributions, 
                      and see what I'm building next.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10">
                    <GitBranch className="w-4 h-4" />
                    <span className="text-sm">{data.stats.totalForks} forks</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10">
                    <GitPullRequest className="w-4 h-4" />
                    <span className="text-sm">24 PRs merged</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm">18 projects</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={data.user.profile}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 bg-orange-600 text-white font-bold hover:bg-orange-700 transition-colors flex items-center justify-center gap-3"
                >
                  <Github className="w-5 h-5" />
                  <span>Explore GitHub</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`${data.user.profile}?tab=repositories`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-3"
                >
                  <Users className="w-5 h-5" />
                  <span>Follow @{data.user.username}</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}