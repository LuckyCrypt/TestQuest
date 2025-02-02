using TestQuest.Domain;

namespace TestQuest.Domain.Interfaces
{
    public interface IMouseTrackDataRepository
    {
        Task AddAsync(MouseTrackData data);
    }
}